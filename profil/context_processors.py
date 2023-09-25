from .models import UserProfile

def user_profile(request):
    user_profile, created = UserProfile.objects.get_or_create(user=request.user)
    return {'user_profile': user_profile}
