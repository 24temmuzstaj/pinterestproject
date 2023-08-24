from django.urls import path
from . import views

urlpatterns = [
    path('<int:pins_id>/', views.add_comment, name='add_comment'),
]