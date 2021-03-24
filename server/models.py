from sqlalchemy import Column, Integer, VARCHAR, TIMESTAMP, FLOAT
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Transactions(Base):
    __tablename__ = 'transactions'

    id = Column('id', Integer, primary_key=True, autoincrement=True)
    time = Column('time', TIMESTAMP, nullable=False)
    sender = Column('sender', VARCHAR, nullable=False)
    receiver = Column('receiver', VARCHAR, nullable=False)
    money = Column('sum', FLOAT, nullable=False)


class Addresses(Base):
    __tablename__ = 'addresses'

    id = Column('id', Integer, primary_key=True, autoincrement=True)
    address = Column('address', VARCHAR, nullable=False, unique=True)
