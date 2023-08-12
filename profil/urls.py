from django.urls import path
from . import views 

urlpatterns = [
    path('profil/', views.view_profile, name='view_profile'),
    path('profil/guncelle/', views.update_profile, name='update_profile'),
]
