from django.db import models

class Pins(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='pin/',null="True")
    
    def __str__(self):
        return self.title
