from django.shortcuts import render, redirect
from .models import *
from .models import Pins
from django.contrib.auth.decorators import login_required
from django.db.models import Q
from .forms import CommentForm
from profil.models import UserProfile
def pins(request, pinId):
    
    pin = Pins.objects.get(id=pinId)
    comments = Comment.objects.filter(pin=pin)
    
    if request.method == 'POST':
        comment_form = CommentForm(request.POST)
        print(comment_form.errors)
        if comment_form.is_valid():
            print("Form is valid")
            new_comment = comment_form.save(commit=False)
            new_comment.pin = pin  
            new_comment.user = request.user
            new_comment.save()
            comment_form = CommentForm()


    context = {
        'pin': pin,
        'comments': comments,
        'comment_form': comment_form,
        
    
    }
    return render(request, 'detail.html', context)



def index(request):
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)
    pins = Pins.objects.all()  
    search = ""
    if request.GET.get('search'):
        search = request.GET.get('search')
        pins = Pins.objects.filter( 
            Q(title__icontains=search)|
            Q(kategori__title__icontains=search)|
            Q(description__icontains=search)
        )
    
    return render(request, 'index.html', {'pins': pins,'search':search, 'user_profile': user_profile})

def pins(request,pinId):
    pinim=Pins.objects.get(id=pinId)
    context={
        'pin': pinim
    }
    return render(request, 'detail.html', context)


@login_required
def create(request):
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
        'kategoriler': kategoriler
    }
    return render(request, 'create.html', context)





def show_pins(request):
    pins = Pins.objects.all()
    return render(request, 'detail.html', {'pins': pins})

