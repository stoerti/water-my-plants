import RPi.GPIO as GPIO
import time
import logging

from flask import Flask
from apscheduler.schedulers.background import BackgroundScheduler

from domain.Plant import Plant, PlantRepository
from domain.DatabaseUtil import setup_database
from domain.MoistureMeasurement import MoistureMeasurementRepository
from domain.WateringAction import WateringActionRepository
from service.PlantService import PlantService
from controller.PlantController import PlantController
from logging.config import dictConfig

dictConfig({
    'version': 1,
    'formatters': {'default': {
        'format': '[%(asctime)s] %(levelname)s in %(name)s: %(message)s',
    }},
    'handlers': {'wsgi': {
        'class': 'logging.StreamHandler',
        'stream': 'ext://flask.logging.wsgi_errors_stream',
        'formatter': 'default'
    }},
    'root': {
        'level': 'INFO',
        'handlers': ['wsgi']
    }
})
app = Flask(__name__)

engine = setup_database()
measurement_repo = MoistureMeasurementRepository(engine)
plant_repo = PlantRepository(engine)
watering_action_repo = WateringActionRepository(engine)

plants = plant_repo.findAll()

plant_service = PlantService(plant_repo, measurement_repo, watering_action_repo, plants)

import controller.WelcomeController

app.register_blueprint(PlantController(plant_service), url_prefix='/plant')

sched = BackgroundScheduler(daemon=True)

i = 0
for plant in plant_service.get_all_plants():
    app.logger.info('Create cron for %s' % plant.name)
    sched.add_job(plant_service.check_plant, 'cron', minute='0,10,20,30,40,50', second=i, args=[plant.name])
    i += 1

sched.start()

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080, debug=True, use_reloader=False)

# todo: cleanup sensors
# except KeyboardInterrupt:
#     print("Quit")
#     farn.cleanup_sensors()
#     GPIO.cleanup()
