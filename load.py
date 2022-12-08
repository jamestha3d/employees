import csv
from employees.models import Employee, City
import datetime

def main():
    f = open("employee-list.csv")
    reader = csv.reader(f)
    beginning = True
    cities = []
    for Gender, Title, GivenName, MiddleInitial, Surname, City2, State, ZipCode, Birthday in reader:
        if beginning:
            beginning = False
            continue
        city = City(name=City2, state=State, zipcode=ZipCode)
        if City2 not in cities:
            cities.append(City2)
            city.save()
        else:
            city = City.objects.get(name=City2)
        birthday = Birthday.split("/")
        bday = datetime.date(int(birthday[2]), int(birthday[0]), int(birthday[1]))
        employee = Employee(gender=Gender, title=Title, givenName=GivenName, middleInitial=MiddleInitial, surname=Surname, city=city, birthday=bday)
        #print(cities)
        #print(employee)
        employee.save()
    

if __name__ == "__main__":
	main()

    
#python manage.py shell
#import load
#load.main()