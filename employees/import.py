import csv
from employees.models import Employee, City
import datetime

def main():
    f = open("employee-list.csv")
    reader = csv.reader(f)
    beginning = True
    cities = []
    for Gender, Title, GivenName, MiddleInitial, Surname, City, State, ZipCode, Birthday in reader:
        if beginning:
            beginning = False
            continue
        city = City(name=City, state=State, zipcode=ZipCode)
        if State not in cities:
            cities.append(State)
            city.save()

        birthday = Birthday.split("/")
        bday = datetime.date(int(birthday[2]), int(birthday[0]), int(birthday[1]))
        employee = Employee(gender=Gender, title=Title, givenName=GivenName, middleInitial=MiddleInitial, surname=Surname, city = city, birthday = Birthday)
        employee.save()
    

if __name__ == "__main__":
	main()