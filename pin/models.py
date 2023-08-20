
from django.db import models
from django.contrib.auth.models import User

class Pins(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='pin/', null=True)
    profile_image = models.ImageField(upload_to='profile/', null=True)  # Profil resmi alanı
    
    def __str__(self):
        return self.title
