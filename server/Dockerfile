FROM python:3.8

RUN pip install fastapi sqlalchemy uvicorn psycopg2
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/
COPY . /usr/src/app/

EXPOSE 8000

CMD ["python", "app.py"]