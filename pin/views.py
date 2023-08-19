

from django.shortcuts import render
from .models import Pins

def index(request):
    pins = Pins.objects.all()  # Değişken adını 'pins' olarak düzeltiyoruz
    return render(request, 'index.html', {'pins': pins})
