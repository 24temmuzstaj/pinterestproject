from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from .forms import UserProfileForm
from .models import UserProfile

@login_required
def view_profile(request):
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)
    return render(request, 'profile/view_profile.html', {'user_profile': user_profile})

@login_required
def edit_profile(request):
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)
    
    if request.method == 'POST':
        form = UserProfileForm(request.POST, request.FILES, instance=user_profile)
        if form.is_valid():
            form.save()
            return redirect('view_profile')
    else:
        form = UserProfileForm(instance=user_profile)
    
    return render(request, 'profile/edit_profile.html', {'form': form, 'user_profile': user_profile})

def view_profile(request):
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)
    return render(request, 'profile/view_profile.html', {'user_profile': user_profile})
