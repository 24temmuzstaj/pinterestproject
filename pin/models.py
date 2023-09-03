
from django.db import models
from django.contrib.auth.models import User

class Kategori(models.Model):
    title = models.CharField(max_length=100)
    def __str__(self):
        return self.title


class Pins(models.Model):
    kategori=models.ForeignKey(Kategori,on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='pin/', null=True)

    def __str__(self):
        return self.title
    


class SavedPin(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pin = models.ForeignKey(Pins, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.user.username}'s Saved Pin: {self.pin.title}"





