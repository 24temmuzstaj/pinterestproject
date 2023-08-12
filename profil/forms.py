from django import forms
from .models import UserProfile

class UserProfileForm(forms.ModelForm):
    class Meta:
        model = UserProfile
        fields = ['bio', 'profile_image']  # Daha fazla alan eklemek isterseniz buraya ekleyin
