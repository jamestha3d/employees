from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path('employees/', views.employeeList, name="employee-list"),
    path('employee/<str:pk>/', views.employeeDetail, name="employee-detail"),
    path('create/', views.employeeCreate, name="employee-create"),
    path('update/<str:pk>/', views.employeeUpdate, name="employee-update"),
    path('delete/<str:pk>/', views.employeeDelete, name="employee-delete"),
]



