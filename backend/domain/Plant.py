from sqlalchemy.orm import declarative_base, Session
from sqlalchemy import Column, Integer, String, Boolean, Numeric, select

from gpio.MoistureSensor import MoistureSensor
from gpio.Pump import Pump

Base = declarative_base()

class Plant(Base):
    __tablename__ = 'plant'
    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    sensor_adc_channel = Column(Integer)
    sensor_gpio_channel = Column(Integer)
    pump_gpio_channel = Column(Integer)
    check_enabled = Column(Boolean)
    check_state = Column(String(50))
    watering_start_limit = Column(Integer)
    watering_stop_limit = Column(Integer)
    watering_duration = Column(Numeric)

    def __repr__(self):
        return "<Plant(id='%f', name='%s', check_enabled='%s', check_state='%s')>" % (
            self.id, self.name, self.check_enabled, self.check_state)


class PlantRepository:
    def __init__(self, engine):
        self.engine = engine

    def findAll(self):
        with Session(self.engine) as session:
            return session.execute(select(Plant)).scalars().all()

    def findByName(self, name):
        with Session(self.engine) as session:
            return session.execute(select(Plant).where(Plant.name == name)).scalars().one()

    def findById(self, id):
        with Session(self.engine) as session:
            return session.execute(select(Plant).where(Plant.id == id)).scalars().one()

    def save(self, plant):
        with Session(self.engine) as session:
            session.add(plant)
            session.commit()
