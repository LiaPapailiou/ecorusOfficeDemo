from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import User
import uuid


class Person(models.Model):
    person_name = models.CharField(max_length=20)
    person_age = models.IntegerField()
    person_owner = models.ForeignKey(
        User, related_name="person", on_delete=models.CASCADE, null=True
    )

    def __str__(self):
        return self.person_name


class Office(models.Model):
    office_name = models.CharField(max_length=50)
    peopleWorking = ArrayField(
        models.CharField(max_length=20, blank=True), default="list"
    )
    office_owner = models.ForeignKey(
        User, related_name="office", on_delete=models.CASCADE, null=True
    )

    def __str__(self):
        return self.office_name
