from django.shortcuts import render, redirect
from .forms import CommentForm
from pin.models import Pins
from profil.models import UserProfile


def add_comment(request, pins_id):
    pins = Pins.objects.get(id=pins_id)  
    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.pins = pins
            comment.user = request.user
            
            comment.save()
            return redirect('add_comment', pins_id=pins_id)
    else:
        form = CommentForm()
    return render(request, 'comments/add_comment.html', {'pins': pins, 'comment_form': form})


