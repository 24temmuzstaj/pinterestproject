from django.db import models
from pin.models import Pins

class Comment(models.Model):
    pins = models.ForeignKey(Pins, on_delete=models.CASCADE,related_name='comments',null=True)
    user = models.ForeignKey('auth.User', on_delete=models.CASCADE ,null=True, blank=True)
    text = models.TextField(null=True, )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self): 
        return self.text