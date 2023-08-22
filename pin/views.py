

from django.shortcuts import render, redirect
from .models import *
from .models import Pins
from django.contrib.auth.decorators import login_required
from django.db.models import Q

def index(request):
    pins = Pins.objects.all()  
    search = ""
    if request.GET.get('search'):
        search = request.GET.get('search')
        pins = Pins.objects.filter( 
            Q(title__icontains=search)|
            Q(kategori__title__icontains=search)|
            Q(description__icontains=search)
        )
    
    return render(request, 'index.html', {'pins': pins,'search':search})

def pins(request,pinId):
    pinim=Pins.objects.get(id=pinId)
    context={
        'pin': pinim
    }
    return render(request, 'detail.html', context)




@login_required
def create(request):
    kategoriler=Kategori.objects.all()
    if request.method == 'POST':
        title = request.POST['title']  
        description = request.POST['description']  
        image = request.FILES['image']       
    
        
        pin = Pins.objects.create(
            user=request.user,
            title=title, 
            description=description,
            image=image,
          
        )
        print("pin oluşturuldu")
        return redirect('index') 
    context={
        'kategoriler': kategoriler
    }

    return render(request, 'create.html',context)




def show_pins(request):
    pins = Pins.objects.all()
    return render(request, 'detail.html', {'pins': pins})

