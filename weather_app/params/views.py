from rest_framework.response import Response
from django.http import HttpResponse
from rest_framework.decorators import api_view
from params.models import Weather_Params
from params.serializers import TempParamsSerializer, WindParamsSerializer, PressParamsSerializer
# Create your views here.

def initial(request):
    html = "<html><body><h1>ГЛАВНАЯ</h1></body></html>"
    return HttpResponse(html)


@api_view(['GET'])
def get_temp_params(request):
    if request.method == 'GET':
        params = Weather_Params.objects.all()
        serializer = TempParamsSerializer(params, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_wind_params(request):
    if request.method == 'GET':
        params = Weather_Params.objects.all()
        serializer = WindParamsSerializer(params, many=True)
        return Response(serializer.data)

@api_view(['GET'])
def get_press_params(request):
    if request.method == 'GET':
        params = Weather_Params.objects.all()
        serializer = PressParamsSerializer(params, many=True)
        return Response(serializer.data)
