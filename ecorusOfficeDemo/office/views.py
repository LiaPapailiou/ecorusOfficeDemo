from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import OfficeSerializer, PersonSerializer
from .models import Person, Office
from rest_framework.permissions import IsAuthenticated, AllowAny


class PersonView(viewsets.ModelViewSet):
    serializer_class = PersonSerializer
    # queryset = Person.objects.all()
    # permission_classes = [permissions.AllowAny]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.person.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class OfficeView(viewsets.ModelViewSet):
    serializer_class = OfficeSerializer
    # queryset = Office.objects.all()
    # permission_classes = [permissions.AllowAny]

    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.office.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

