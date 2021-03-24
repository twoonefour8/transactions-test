В папке проекта открыть терминал и поочередно выполнить компанды:
- **sudo docker build -t client-test ./client**
- **sudo docker build -t server-test ./server**

Запустить контейнер серверной части:
- **sudo docker run --rm -d -p 8000:8000 --name server server-test**

Запустить контейнер клиентской части:
- **sudo docker run --rm -p 8040:8040 --name client client-test**

В терминале отобразятся адреса, по которым доступно приложение в браузере 