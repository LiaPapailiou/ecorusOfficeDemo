from django.db import models
from django.contrib.postgres.fields import ArrayField
import uuid


class Person(models.Model):
    person_name = models.CharField(max_length=20)
    person_age = models.IntegerField()
    id = models.UUIDField(
        max_length=36, unique=True, default=uuid.uuid4, primary_key=True, editable=False
    )

    def happyBirthday(self):
        self.person_age += 1
        return self.person_age

    def changeName(self, new_name):
        self.person_name = new_name
        return self.person_name

    def __str__(self):
        return self.person_name


class Office(models.Model):
    office_name = models.CharField(max_length=50)
    peopleWorking = ArrayField(
        models.CharField(max_length=20), default="list", blank=True
    )

    def startWorkingFor(self, person=Person):
        self.peopleWorking.append(person.person_name)

    def finishedWorkingFor(self, person=Person):
        self.peopleWorking.remove(person.person_name)

    def __str__(self):
        return self.office_name
