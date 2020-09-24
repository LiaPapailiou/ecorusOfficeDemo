from django.contrib import admin
from django.urls import path, include
from rest_framework import routers 
from office import views 

router = routers.DefaultRouter()
router.register(r'offices', views.OfficeView, 'office')
router.register(r'persons', views.PersonView, 'office')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('frontend.urls')),
    path('api/', include(router.urls))
]
