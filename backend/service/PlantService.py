from flask.logging import logging

from gpio.MoistureSensor import MoistureSensor
from gpio.Pump import Pump

log = logging.getLogger("PlantService")

class PlantService:

    def __init__(self, plant_repository, moisture_measurement_repository, initial_plants):
        self.plant_repository = plant_repository
        self.moisture_measurement_repository = moisture_measurement_repository
        self.plants = {}

        for plant in initial_plants:
            print(plant)
            self.plants[plant.name] = PlantWithSensors(plant)

    def get_all_plants(self):
        return self.plants.values()

    def get_plant(self, plant_name):
        return self.plants[plant_name]

    def check_plant(self, plant_name):
        plant = self.plants[plant_name]
        value = self.measure_moisture(plant_name, True)

        print("Plant %s, plant-state: %s, measurement: %0.1f, watering-start-limit: %d, watering-stop-limit: %d" % (plant.name, plant.check_state, value, plant.watering_start_limit, plant.watering_stop_limit))

        if plant.check_enabled == True:
            if plant.check_state == 'OBSERVE':
                if plant.watering_start_limit < value:
                    print("Plant %s - too dry, start watering" % (plant.name))
                    plant.water_plant(1.0)
                    self.set_plant_check_state(plant.id, 'WATERING')
            elif plant.check_state == 'WATERING':
                if plant.watering_stop_limit < value:
                    print("Plant %s - still in watering mode" % (plant.name))
                    plant.water_plant(1.0)
                else:
                    print("Plant %s - above watering threshold, stopping and switch to observe mode" % (plant.name))
                    self.set_plant_check_state(plant.id, 'OBSERVE')

        return value

    def measure_moisture(self, plant_name, log):
        plant = self.plants[plant_name]

        value = plant.get_moisture_level()

        if log:
            self.moisture_measurement_repository.save_moisture_measurement(plant.id, value)

        return value

    def water_plant(self, plant_name, seconds):
        self.plants[plant_name].water_plant(seconds)

    def get_moisture_history(self, plant_name, fromTimestamp, toTimestamp):
        return self.moisture_measurement_repository.get_history(self.plants[plant_name].id, fromTimestamp, toTimestamp)

    def set_plant_check_state(self, plant_id, check_state):
        plant = self.plant_repository.findById(plant_id)
        plant.check_state = check_state
        self.plants[plant.name].sync_with_entity(plant)

        self.plant_repository.save(plant)


class PlantWithSensors:

    def __init__(self, plant):
        self.sync_with_entity(plant)

        self.moisture_sensor = MoistureSensor(plant.sensor_gpio_channel, plant.sensor_adc_channel)
        self.pump = Pump(plant.pump_gpio_channel)

    def sync_with_entity(self, plant):
        self.id = plant.id
        self.name = plant.name
        self.sensor_adc_channel = plant.sensor_adc_channel
        self.sensor_gpio_channel = plant.sensor_gpio_channel
        self.pump_gpio_channel = plant.pump_gpio_channel
        self.check_enabled = plant.check_enabled
        self.check_state = plant.check_state
        self.watering_start_limit = plant.watering_start_limit
        self.watering_stop_limit = plant.watering_stop_limit

    def cleanup_sensors(self):
        print("Plant %s - cleanup sensors" % (self.name))
        self.moisture_sensor.cleanup()
        self.pump.cleanup()

    def get_moisture_level(self):
        return self.moisture_sensor.measure()

    def water_plant(self, seconds):
        print("Plant %s - watering plant for %f seconds" % (self.name, seconds))
        return self.pump.pump_water(seconds)
