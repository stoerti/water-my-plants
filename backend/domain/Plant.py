from gpio.MoistureSensor import MoistureSensor

class Plant:
    def __init__(self, plant_name, sensor_adc_channel, sensor_gpio_channel):
        self.plant_name = plant_name
        self.sensor_adc_channel = sensor_adc_channel
        self.sensor_gpio_channel = sensor_gpio_channel
        self.moisture_sensor = MoistureSensor(sensor_gpio_channel, sensor_adc_channel)

    def cleanup_sensors(self):
        self.moisture_sensor.cleanup()

    def get_moisture_level(self):
        return self.moisture_sensor.measure()
