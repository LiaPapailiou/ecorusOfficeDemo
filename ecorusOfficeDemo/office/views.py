from django.shortcuts import render
from django.http import HttpResponse
from .models import Person, Office

# Create your views here.
def index(request):
  person = Person.objects.all()
  return HttpResponse(person)
