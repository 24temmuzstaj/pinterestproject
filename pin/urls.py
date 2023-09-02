from django.urls import path
from pin.views import *
from . import views
from django.conf.urls.static import static
from django.conf import settings
urlpatterns =[
    path('', views.index, name='index'),
    path('pin-detay/<int:pinId>/', views.pins, name='detay'),
    path('create/',views.create, name='create'),
    path('pins/<int:pinsId>/', views.pins_detay, name='pins_detay'),
    path('my-pins/', my_pins, name='my_pins'),
 


]




