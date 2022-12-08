from rest_framework import serializers
from .models import *

class EmployeeSerializer(serializers.ModelSerializer):
    #overwrite related string fields
    city = serializers.StringRelatedField(many=False)

    #add extra fields not available in models
    state = serializers.SerializerMethodField()
    zipcode = serializers.SerializerMethodField()

    #method for extra fields
    def get_state(self, employee):
        return employee.city.state

    def get_zipcode(self, employee):
        return employee.city.zipcode

    class Meta:
        model = Employee
        fields = '__all__'



class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'
