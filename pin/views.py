from django.shortcuts import render, redirect
from .models import *
from .models import Pins
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from profil.models import UserProfile




def index(request):
    print(request.user.is_authenticated, "asda")
    
    pins = Pins.objects.all()  
    search = ""
    if request.GET.get('search'):
        search = request.GET.get('search')
        pins = Pins.objects.filter( 
            Q(title__icontains=search)|
            Q(kategori__title__icontains=search)|
            Q(description__icontains=search)
        )
    context = {'pins': pins,'search':search}
    if request.user.is_authenticated:
        user_profile, created = UserProfile.objects.get_or_create(user=request.user)
        context["user_profile"]=user_profile
    return render(request, 'index.html', context )


def pins(request,pinId):
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)
  
    pinim=Pins.objects.get(id=pinId)
    context={
        'pin': pinim,
        'user_profile': user_profile
    }
    return render(request, 'detail.html', context)


@login_required
def create(request):
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)
    kategoriler = Kategori.objects.all()
    if request.method == 'POST':
        title = request.POST['title']  
        description = request.POST['description']  
        image = request.FILES['image']   
        kategori_id = request.POST.get('kategori')  
    
        pin = Pins.objects.create(
            user=request.user,
            kategori_id=kategori_id,  
            title=title, 
            description=description,
            image=image,
        )
        print("pin oluşturuldu")
        return redirect('index') 
    context = {
        'kategoriler': kategoriler,
        'user_profile': user_profile
    }
    
    return render(request, 'create.html', context)





def show_pins(request):
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)
  
    pins = Pins.objects.all()
    return render(request, 'detail.html', {'pins': pins, 'user_profile': user_profile})

