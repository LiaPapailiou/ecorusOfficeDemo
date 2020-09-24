# from django.shortcuts import render
# from django.http import HttpResponse
# from .models import Person, Office

# # Create your views here.
# def index(request):
#   person = Person.objects.all()
#   return render(request,'index.html', {'person':person})
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