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
    queryset = Person.objects.all()
    permission_classes = [permissions.AllowAny]
    # authentication_classes = (TokenAuthentication,)

    @action(detail=True, methods=["post", "get"])
    def happyBirthday(self, request, pk=None):
        user = self.get_object()
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
        serializer = PersonSerializer(data=request.data)
        if serializer.is_valid():
            user.changeName(serializer.data["new_name"])
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
    queryset = Office.objects.all()
    serializer_class = OfficeSerializer
    permission_classes = [permissions.AllowAny]

    # permission_classes = [permissions.IsAuthenticated]
    # authentication_classes = (TokenAuthentication,)

    # def get_queryset(self, request):
    #     # return self.request.user.office.all()
    #     return Person.objects.filter(office_owner=request.user)

    # def perform_create(self, serializer):
    #     serializer.save(owner=self.request.user)

