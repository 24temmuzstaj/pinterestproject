from django.urls import path
from .views import *
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('register/', userRegister, name='register'),
    path('login/', userLogin, name='login'),
    path('logout/', userLogout, name='logout'),
    
    ]+ static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)


