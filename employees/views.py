from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import *
from .models import *
# Create your views here.
@api_view(['GET'])
def index(request):
    api_urls = {
        'List':'/employees/',
        'Detail view':'/details/ <str:pk>/',
        'Create':'/add/',
        'Update':'/update/<str:pk>/',
        'Delete': '/task-delete/<str:pk>/',
    }

    return Response(api_urls)

@api_view(['GET'])
def employeeList(request):
    employees = Employee.objects.all().order_by('id')
    cities = City.objects.all()
    serializer = EmployeeSerializer(employees, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def employeeDetail(request, pk):
    employee = Employee.objects.get(id=pk)
    cities = City.objects.all()
    serializer = EmployeeSerializer(employee, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def employeeCreate(request):
    data = request.data
    #using serializer to save city
    cityData = {
        "name": data["city"],
        "state": data["state"],
        "zipcode": data["zipcode"]
    }
    city = City.objects.filter(name=cityData["name"], state=cityData["state"], zipcode=cityData["zipcode"])

    if not city:
        city_serializer = CitySerializer(data=cityData)
        if city_serializer.is_valid():
            city = city_serializer.save()
    #         city_id = City.objects.get(name=cityData["name"], state=cityData["state"], zipcode=cityData["zipcode"]).id
    # else:
    #     city_id = city[0].id

    title = data["title"]
    givenName = data["givenName"]
    surname = data["surname"]
    middleInitial = data["middleInitial"]
    gender=  data["gender"]
    bday  = data["birthday"]
    #city = City.objects.get(pk=city_id)

    #using object instance to save employee
    employee = Employee(gender=gender, title=title, givenName=givenName, middleInitial=middleInitial, surname=surname, city=city, birthday=bday)
    employee.save()

    return Response("data added successfully")

@api_view(['POST'])
def employeeUpdate(request, pk):
    employee = Employee.objects.get(id=pk)
    data = request.data 

    cityData = {
        "name": data["city"],
        "state": data["state"],
        "zipcode": data["zipcode"]
    }
    city = City.objects.filter(name=cityData["name"], state=cityData["state"], zipcode=cityData["zipcode"]).first()

    if not city:
        city_serializer = CitySerializer(data=cityData)
        if city_serializer.is_valid():
            city = city_serializer.save()

    #city = City.objects.get(pk=city_id)

    # employee.givenName = data["givenName"]
    # employee.gender = data["gender"]
    # employee.birthday = data["birthday"]
    # employee.title = data["title"]
    # employee.middleInitial = data["middleInitial"]
    # employee.surname = data["surname"]
    # employee.city = city
    

   
    #edit here
    serializer = EmployeeSerializer(instance=employee, data=request.data)
    if serializer.is_valid():
        serializer.save()


    
    return Response("update success")

@api_view(['DELETE'])
def employeeDelete(request, pk):
    employee = Employee.objects.get(id=pk)
    employee.delete()
    #edit here
    serializer = EmployeeSerializer(instance=employee, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response('Deleted Successfully')