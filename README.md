# weather-rest-api
### Тестовое задание
### Графики по произвольным погодным данным (взяты с meteostat)
### Бэкэнд - Django + Django Rest Framework
### Фронт - React (create-react-app) + react-echarts
### Для развертывания на локальном хосте:
* запустить docker-compose build
* начальные миграции для базы: 
  * docker-compose exec django python manage.py migrate
  * docker-compose exec django python manage.py makemigrations params
  * docker-compose exec django python manage.py migrate params
  * наполнение базы postgresql:
    * docker-compose exec django python get_data.py
#### Сервис доступен по адресу: 
    - localhost:3001

