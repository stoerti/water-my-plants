from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base, Session

Base = declarative_base()

def setup_database():
    engine = create_engine('mariadb+mariadbconnector://water_my_plants:water_my_plants@localhost/water_my_plants', echo=False, future=True)
    Base.metadata.bind = engine
    Base.metadata.create_all()
    return engine
