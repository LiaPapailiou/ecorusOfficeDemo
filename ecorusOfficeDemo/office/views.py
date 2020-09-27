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
            return Response({"status": "happy birthday"})
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
            return Response({"status": "name changed"})
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def get_queryset(self, request):
    #     # return self.request.user.person.all()
    #     return Person.objects.filter(person_owner=request.user)

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)


class OfficeView(viewsets.ModelViewSet):
    serializer_class = OfficeSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        offices = Office.objects.all()
        return offices

    # def get_queryset(self, request):
    #     # return self.request.user.office.all()
    #     return Person.objects.filter(office_owner=request.user)

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)

