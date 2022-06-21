from flask import Blueprint, jsonify


def PlantController(plant_service):

    bp = Blueprint("plant", __name__)

    @bp.route('/')
    def get():
        plant_list = []
        for plant in plant_service.get_all_plants():
            plant_list.append({'name': plant.plant_name})

        return jsonify(plant_list)

    @bp.route('/<string:plant_name>')
    def get_plant(plant_name):
        plant = plant_service.get_plant(plant_name)
        ret = {'name': plant.plant_name, 'moistureLevel': plant.get_moisture_level()}
        return jsonify(ret)

    @bp.route('/<string:plant_name>/history')
    def get_history(plant_name):
        history = plant_service.get_moisture_history(plant_name)
        return jsonify(list(map(lambda entry: {'plant': entry.plant, 'moistureLevel': entry.moisture_level, 'timestamp': entry.timestamp.isoformat()}, history)))

    return bp