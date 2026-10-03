
from django.urls import path
from .views import api_of_notes

urlpatterns = [
    path("notes/" , api_of_notes , name="notes_section")
 
]