from django.shortcuts import render
from rest_framework import viewsets, permissions, status
from .serializers import OfficeSerializer, PersonSerializer
from .models import Person, Office
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.authentication import TokenAuthentication


class PersonView(viewsets.ModelViewSet):
    serializer_class = PersonSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        persons = Person.objects.all()
        return persons

    @action(detail=True, methods=["get", "post"])
    def happyBirthday(self, request, pk=None):
        user = self.get_object()
        print(user)
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            user.happyBirthday()
            user.save()
            return Response(serializer.data, status=200)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["post", "get"])
    def changeName(self, request, pk=None):
        user = self.get_object()
        person_data = request.data
        new_name = person_data.get("person_new_name")
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            user.changeName(new_name)
            user.save()
            return Response(serializer.data, status=200)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OfficeView(viewsets.ModelViewSet):
    serializer_class = OfficeSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        offices = Office.objects.all()
        return offices

    @action(detail=True, methods=["get", "post"])
    def startWorkingFor(self, request, pk=None):
        user = self.get_object()
        person_data = request.data.get("employee")
        print({person_data})
        serializer = OfficeSerializer(data=request.data)
        if serializer.is_valid():
            user.startWorkingFor(person_data)
            user.save()
            return Response(serializer.data, status=200)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=["post", "get"])
    def finishedWorkingFor(self, request, pk=None):
        user = self.get_object()
        person_data = request.data.get("employee")
        print(person_data)
        serializer = OfficeSerializer(data=request.data)
        if serializer.is_valid():
            user.finishedWorkingFor(person_data)
            user.save()
            return Response(serializer.data, status=200)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
