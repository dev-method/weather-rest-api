import os
import sys
sys.path.insert(0, '/home/vladimir/Projects/weather_app/weather_app')
sys.path.append("/home/vladimir/Projects/weather_app/weather_app")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "weather_app.settings")
import django
django.setup()
import requests
from params.models import Weather_Params

meteostat_api = "https://api.meteostat.net/v1/history/daily?station=10637&start=2019-01-01&end=2020-01-01&key=dyOSKQLL"
request = requests.get(meteostat_api)
api_data = request.json()['data']
print(api_data)
for i in api_data:
    Weather_Params.objects.create(date=i['date'], temp=i['temperature'], wind=i['windspeed'], pressure=i['pressure'])