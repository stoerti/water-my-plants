

class PlantService:
    def __init__(self, moisture_measurement_repository, initial_plants):
        self.moisture_measurement_repository = moisture_measurement_repository
        self.plants = {}

        for plant in initial_plants:
            self.plants[plant.plant_name] = plant

    def get_all_plants(self):
        return self.plants.values()

    def get_plant(self, plant_name):
        return self.plants[plant_name]

    def check_plant(self, plant_name):
        value = self.measure_moisture(plant_name, True)

    def measure_moisture(self, plant_name, log):
        value = self.plants[plant_name].get_moisture_level()

        if log:
            self.moisture_measurement_repository.save_moisture_measurement(plant_name, value)

        return value

    def get_moisture_history(self, plant_name):
        return self.moisture_measurement_repository.get_history(plant_name)

