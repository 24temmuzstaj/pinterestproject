from django.contrib.auth.models import User
from django.shortcuts import render, redirect

from django.contrib import messages
from datetime import datetime  # datetime modülünü ekleyin
from django.contrib.auth import login,authenticate,logout


def userRegister(request):
    if request.method == 'POST':
        email = request.POST['email']
        sifre = request.POST['sifre']
        date = request.POST['date']

        # Alanların boş olup olmadığını kontrol et
        if not email or not sifre or not date:
            messages.error(request, 'Tüm alanları doldurun')
            return render(request, 'user/register.html')

        try:
            birth_date = datetime.strptime(date, '%Y-%m-%d')
        except ValueError:
            messages.error(request, 'Geçersiz tarih formatı')
            return render(request, 'user/register.html')

        if User.objects.filter(email=email).exists():
            messages.error(request, 'Email adresi zaten kayıtlı')
        elif len(sifre) < 6:
            messages.error(request, 'Şifre en az 6 karakter olmalıdır')
        elif birth_date.year > 2010:
            messages.error(request, 'Doğum tarihi 2010 yılından önce olmalıdır')
        else:
            # Kullanıcı adını e-posta adresi olarak kullan
            username = email.split('@')[0]
            user = User.objects.create_user(username=username, email=email, password=sifre)
            messages.success(request, f"Pinterest'e Hoş Geldiniz, {user}")
            return redirect('index')
    return render(request, 'user/register.html')



def userLogin(request):
    if request.method == 'POST':
        email = request.POST['email']
        sifre = request.POST['sifre']
    
        user = authenticate(request, username=email.split('@')[0], password=sifre)

        if user is not None:
            login(request, user)
            messages.success(request, f"Giriş Yapıldı, {user}")
            return redirect('index')
        else:
            messages.error(request, "E-posta veya Şifre Hatalı")
    
    return render(request, 'user/login.html')

def userLogout(request):
    logout(request)
    messages.success(request, "Çıkış yapıldı")
    return redirect('login')

