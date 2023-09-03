from django.shortcuts import render, get_object_or_404, redirect
from .models import *
from .models import Pins
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from profil.models import UserProfile
from comments.forms import CommentForm
from datetime import datetime
from django.http import HttpResponseRedirect


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

def pins(request, pinId):
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)
    pin = get_object_or_404(Pins, id=pinId)
    comments = pin.comments.all()

    share_owner_profile = pin.user.userprofile
    now = datetime.now() 

    if request.method == 'POST':
        comment_form = CommentForm(request.POST)
        if comment_form.is_valid():
            comment = comment_form.save(commit=False)
            comment.pins = pin
            comment.user = request.user
            comment.save()
            return HttpResponseRedirect(request.path) 
    else:
        comment_form = CommentForm()

    context = {
        'pin': pin,
        'user_profile': user_profile,
        'comments': comments,
        'comment_form': comment_form,
        'share_owner_profile': share_owner_profile,  
        'now': now,
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

def pins_detay(request, pinsId):
    pin = Pins.objects.get(id=pinsId)
    comments = pin.comments.all()
    comment_form = CommentForm()
    return render(request, 'pin/pin_detay.html', {'pin': pin, 'comments': comments, 'comment_form': CommentForm()}) 

# Kullanıcının pinlerini çek
@login_required
def my_pins(request):
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)
    pins = Pins.objects.filter(user=request.user)  # Kullanıcının pinlerini çek
    return render(request, 'profile/view_profile.html', {'pins': pins, 'user_profile': user_profile})


@login_required
def save_pin(request, pinId):
    pin = get_object_or_404(Pins, id=pinId)
    user = request.user
    # Kullanıcının bu fotoğrafı daha önce kaydedip kaydetmediğini kontrol edin
    if not SavedPin.objects.filter(user=user, pin=pin).exists():
        SavedPin.objects.create(user=user, pin=pin)
    # Kullanıcıyı kaydedilen fotoğraflar sayfasına yönlendirin veya istediğiniz yere yönlendirin
    return redirect('saved_pins')

from .models import SavedPin

@login_required
def saved_pins(request):
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)
    user = request.user
    saved_pins = SavedPin.objects.filter(user=user)
    return render(request, 'profile/view_profile.html', {'saved_pins': saved_pins,  'user_profile': user_profile})