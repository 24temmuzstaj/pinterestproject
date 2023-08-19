

from django.shortcuts import render, redirect
from .models import *

def index(request):
    pins = Pins.objects.all()  # Değişken adını 'pins' olarak düzeltiyoruz
    return render(request, 'index.html', {'pins': pins})

def pins(request,pinId):
    pinim=Pins.objects.get(id=pinId)
    context={
        'pin': pinim
    }
    return render(request, 'detail.html', context)


def create(request):
    if request.method == 'POST':
        title = request.POST['title']  
        description = request.POST['description']  
        image = request.FILES['image']       
        
        pins = Pins.objects.create(
            title=title, 
            description=description,
            image=image,
        )
        print("pins oluşturuldu")
        pins.save()
        return redirect('index')
    return render(request, 'create.html')
