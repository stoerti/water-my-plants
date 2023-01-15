from sqlalchemy.orm import declarative_base, Session
from sqlalchemy import Column, Integer, String, Numeric, DateTime, select

from datetime import datetime, timedelta

Base = declarative_base()

class WateringAction(Base):
    __tablename__ = 'watering_action'
    id = Column(Integer, primary_key=True)
    plant_id = Column(Integer)
    duration = Column(Numeric)
    timestamp = Column(DateTime)

    def __repr__(self):
        return "<WateringAction(plant='%s', duration='%.1f's, timestamp='%s')>" % (
            self.plant_id, self.duration, self.timestamp)

class WateringActionRepository:
    def __init__(self, engine):
        self.engine = engine

    def save_watering_action(self, plant_id, duration):
        with Session(self.engine) as session:
            current_action = WateringAction(plant_id=plant_id, duration=duration, timestamp=datetime.now())
            session.add(current_action)
            session.commit()

    def get_history(self, plant_id, fromTimestamp, toTimestamp):
        with Session(self.engine) as session:

            if fromTimestamp is None:
                fromTimestamp = datetime.today() - timedelta(days=1)
            if toTimestamp is None:
                toTimestamp = datetime.today()

            return session.execute(select(WateringAction).where(WateringAction.plant_id == plant_id, WateringAction.timestamp.between(fromTimestamp, toTimestamp))).scalars().all()
