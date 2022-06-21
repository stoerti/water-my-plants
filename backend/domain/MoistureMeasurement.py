from sqlalchemy.orm import declarative_base, Session
from sqlalchemy import Column, Integer, String, Numeric, DateTime, select

import datetime

Base = declarative_base()


class MoistureMeasurement(Base):
    __tablename__ = 'moisture_measurement'
    id = Column(Integer, primary_key=True)
    plant = Column(String(100))
    moisture_level = Column(Numeric)
    timestamp = Column(DateTime)

    def __repr__(self):
        return "<MoistureMeasurement(plant='%s', moisture_level='%.1f', timestamp='%s')>" % (
            self.plant, self.moisture_level, self.timestamp)


class MoistureMeasurementRepository:
    def __init__(self, engine):
        self.engine = engine

    def save_moisture_measurement(self, plant, measurement):
        with Session(self.engine) as session:
            current_measurement = MoistureMeasurement(plant=plant, moisture_level=measurement, timestamp=datetime.datetime.now())
            session.add(current_measurement)
            session.commit()

    def get_history(self, plant_name):
        with Session(self.engine) as session:
            return session.execute(select(MoistureMeasurement).where(MoistureMeasurement.plant == plant_name)).scalars().all()

