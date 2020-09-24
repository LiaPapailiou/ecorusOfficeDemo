from rest_framework import serializers
from .models import Person, Office


class PersonSerializer(serializers.ModelSerializer):
  class Meta:
    model = Person
    fields = ('person_name', 'person_age')


class OfficeSerializer(serializers.ModelSerializer):
  class Meta:
    model = Office
    fields = ('office_name', 'peopleWorking')