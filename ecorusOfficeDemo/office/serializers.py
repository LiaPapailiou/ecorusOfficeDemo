from rest_framework import serializers
from .models import Person, Office


class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ("id", "person_name", "person_age")


class OfficeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Office
        fields = ("id", "office_name", "peopleWorking")

