from sqlalchemy import create_engine, func, union, or_
from models import Transactions, Addresses, Base
from sqlalchemy.orm import sessionmaker
import datetime
import random
import string


class DBConnector:
    def __init__(self):
        # self.engine = create_engine('postgresql:///Tasks')
        self.engine = create_engine('sqlite:///Tasks')
        Base.metadata.bind = self.engine
        Base.metadata.create_all(self.engine)
        self.dbSession = sessionmaker(bind=self.engine)

    def getAddresses(self):
        session = self.dbSession()
        addresses = session.query(Addresses.address).all()
        normalizedAddresses = []
        for address in addresses:
            transactions = session.query(Transactions).filter(
                or_(Transactions.receiver == address[0], Transactions.sender == address[0])).all()

            normalizedAddresses.append({'address': address[0], 'count': len(transactions)})

        session.close()
        return normalizedAddresses

    def getTransactions(self):
        session = self.dbSession()
        transactions = session.query(Transactions).all()
        session.close()
        return transactions

    def createAddress(self):
        session = self.dbSession()
        addressName = ''.join([random.choice(string.hexdigits[:16]) for x in range(16)])
        newId = session.query(func.max(Addresses.id)).one()[0]
        newId = newId + 1 if newId is not None else 1
        address = Addresses(id=newId, address=addressName)
        session.add(address)
        session.commit()
        session.close()
        return addressName

    def getAddressTransactions(self, address):
        session = self.dbSession()
        transactions = session.query(Transactions).filter(
            or_(Transactions.receiver == address, Transactions.sender == address)).all()
        session.close()
        return transactions

    def createTransaction(self, address=None):
        session = self.dbSession()

        maxId = session.query(func.max(Transactions.id)).one()[0]
        maxId = 0 if maxId is None else int(maxId)+1
        ids = session.query(Addresses.id).all()
        ids = [int(x[0]) for x in ids]

        if address is None:
            receiver = self.getRandomAddress(session, ids)
            sender = self.getRandomAddress(session, ids)
        else:
            if random.randint(0, 1) == 0:
                receiver = address
                sender = self.getRandomAddress(session, ids)
            else:
                receiver = self.getRandomAddress(session, ids)
                sender = address

        transaction = Transactions(
            id=maxId,
            time=datetime.datetime.now(),
            receiver=receiver,
            sender=sender,
            money='{0:.2f}'.format(random.uniform(0.01, 10000))
        )
        session.add(transaction)
        session.commit()
        session.close()

    def getRandomAddress(self, session, ids):
        if len(ids) == 1:
            address = session.query(Addresses.address).filter(Addresses.id == 1).one()[0]
        else:
            address = session.query(Addresses.address).filter(
                Addresses.id == random.randrange(ids[0], ids[-1])
            ).one()[0]

        return address
