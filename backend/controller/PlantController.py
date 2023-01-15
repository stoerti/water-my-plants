from flask import Blueprint, jsonify, request
from flask_restful import inputs
from datetime import datetime


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
        ret = {'name': plant.name, 'moistureLevel': plant.get_moisture_level()}
        return jsonify(ret)

    @bp.route('/<string:plant_name>/check')
    def check_plant(plant_name):
        plant = plant_service.get_plant(plant_name)
        ret = {'name': plant.name, 'moistureLevel': plant_service.check_plant(plant_name)}
        return jsonify(ret)


    @bp.route('/<string:plant_name>/history')
    def get_history(plant_name):
        fromTimestamp = request.args.get("from", default=None, type=inputs.datetime_from_iso8601)
        toTimestamp = request.args.get("to", default=None, type=inputs.datetime_from_iso8601)

        history = plant_service.get_moisture_history(plant_name, fromTimestamp, toTimestamp)
        return jsonify(list(map(lambda entry: {'plant': plant_name, 'moistureLevel': entry.moisture_level, 'timestamp': entry.timestamp.isoformat()}, history)))

    @bp.route('/<string:plant_name>/water_plant')
    def water_plant(plant_name):
        seconds = request.args.get("seconds", default=0, type=float)
        if seconds > 0:
            plant = plant_service.water_plant(plant_name, seconds)
        resp = jsonify(success=True)
        return resp

    return bp
