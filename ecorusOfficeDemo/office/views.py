from django.shortcuts import render
from rest_framework import viewsets    
from .serializers import OfficeSerializer, PersonSerializer
from .models import Person, Office


class PersonView(viewsets.ModelViewSet): 
  serializer_class = PersonSerializer    
  queryset = Person.objects.all()


class OfficeView(viewsets.ModelViewSet):
  serializer_class = OfficeSerializer
  queryset = Office.objects.all()