from django.db import models
import datetime

#d = datetime.date(2000, 01, 01)
# Create your models here.
class Employee(models.Model):
    gender = models.CharField(max_length=10)
    title = models.CharField(max_length=7)
    givenName = models.CharField(max_length=25)
    middleInitial = models.CharField(max_length=1)
    surname = models.CharField(max_length=25)
    birthday = models.DateField()
    city = models.ForeignKey('City', on_delete=models.CASCADE, blank=True, null=True, related_name="employees")

class City(models.Model):
    name = models.CharField(max_length=25)
    state = models.CharField(max_length=2)
    zipcode = models.CharField(max_length=7)

    def __str__(self):
        return f"{self.name}"

