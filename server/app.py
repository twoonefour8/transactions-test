import uvicorn
from db import DBConnector
from fastapi import FastAPI, Request
from fastapi.encoders import jsonable_encoder
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
db = DBConnector()

origins = [
    'http://localhost:4200',
    'http://localhost:8080',
    '*'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)


@app.get('/api/addresses')
def root():
    addresses = db.getAddresses()
    return addresses


@app.get('/api/create-address')
def createAddress():
    db.createAddress()


@app.post('/api/create-address-transaction')
async def createTransaction(request: Request):
    body = await request.json()
    address = body.get('address')
    db.createTransaction(address)


@app.get('/api/create-transaction')
async def createTransaction():
    db.createTransaction()


@app.post('/api/get-address-transactions')
async def getAddressTransactions(request: Request):
    body = await request.json()
    address = body.get('address')
    transactions = db.getAddressTransactions(address)
    return jsonable_encoder(transactions)


@app.get('/api/get-transactions')
def getTransactions():
    transactions = db.getTransactions()
    return jsonable_encoder(transactions)


if __name__ == '__main__':
    uvicorn.run('app:app', host='0.0.0.0', port=8000, log_level='info', reload=True)
