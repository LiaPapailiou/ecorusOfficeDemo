from django.contrib import admin
from .models import Person, Office


class PersonAdmin(admin.ModelAdmin):
  list_display = ('person_name', 'person_age')


class OfficeAdmin(admin.ModelAdmin):
  list_display = ('office_name', 'peopleWorking')


admin.site.register(Person, PersonAdmin)
admin.site.register(Office, OfficeAdmin)