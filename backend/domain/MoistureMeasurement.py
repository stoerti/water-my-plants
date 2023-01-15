from sqlalchemy.orm import declarative_base, Session
from sqlalchemy import Column, Integer, String, Numeric, DateTime, select

from datetime import datetime, timedelta

Base = declarative_base()


class MoistureMeasurement(Base):
    __tablename__ = 'moisture_measurement'
    id = Column(Integer, primary_key=True)
    plant_id = Column(Integer)
    moisture_level = Column(Numeric)
    timestamp = Column(DateTime)

    def __repr__(self):
        return "<MoistureMeasurement(plant='%s', moisture_level='%.1f', timestamp='%s')>" % (
            self.plant, self.moisture_level, self.timestamp)

class MoistureMeasurementRepository:
    def __init__(self, engine):
        self.engine = engine

    def save_moisture_measurement(self, plant_id, measurement):
        with Session(self.engine) as session:
            current_measurement = MoistureMeasurement(plant_id=plant_id, moisture_level=measurement, timestamp=datetime.now())
            session.add(current_measurement)
            session.commit()

    def get_history(self, plant_id, fromTimestamp, toTimestamp):
        with Session(self.engine) as session:

            if fromTimestamp is None:
                fromTimestamp = datetime.today() - timedelta(days=1)
            if toTimestamp is None:
                toTimestamp = datetime.today()

            return session.execute(select(MoistureMeasurement).where(MoistureMeasurement.plant_id == plant_id, MoistureMeasurement.timestamp.between(fromTimestamp, toTimestamp))).scalars().all()
