from django.shortcuts import render
from rest_framework import viewsets, permissions    
from .serializers import OfficeSerializer, PersonSerializer
from .models import Person, Office


class PersonView(viewsets.ModelViewSet): 
  serializer_class = PersonSerializer    
  queryset = Person.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]


class OfficeView(viewsets.ModelViewSet):
  serializer_class = OfficeSerializer
  queryset = Office.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]