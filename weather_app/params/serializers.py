from params.models import Weather_Params
from rest_framework import serializers

class TempParamsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather_Params
        fields = ('id', 'date', 'temp')

class WindParamsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather_Params
        fields = ('id', 'date', 'wind')

class PressParamsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather_Params
        fields = ('id', 'date', 'pressure')