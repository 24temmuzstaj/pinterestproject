

from django.shortcuts import render, redirect
from .models import *
from .models import Pins
from django.contrib.auth.decorators import login_required


def index(request):
    pins = Pins.objects.all()  
    if request.GET.get('search'):
        search = request.GET.get('search')
        pins = Pins.objects.filter( title__icontains=search)
    return render(request, 'index.html', {'pins': pins})

def pins(request,pinId):
    pinim=Pins.objects.get(id=pinId)
    context={
        'pin': pinim
    }
    return render(request, 'detail.html', context)




@login_required
def create(request):
    if request.method == 'POST':
        title = request.POST['title']  
        description = request.POST['description']  
        image = request.FILES['image']       
        profile_image = request.FILES.get('profile_image')  # Profil resmini alma
        
        pin = Pins.objects.create(
            user=request.user,
            title=title, 
            description=description,
            image=image,
            profile_image=profile_image,  # Profil resmini kaydetme
        )
        print("pin oluşturuldu")
        return redirect('index')
    return render(request, 'create.html')






def show_pins(request):
    pins = Pins.objects.all()
    return render(request, 'detail.html', {'pins': pins})

