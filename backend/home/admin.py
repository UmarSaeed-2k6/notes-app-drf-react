from django.contrib import admin
from .models import notesModel

# Register your models here.

class adminListView(admin.ModelAdmin):
    list_display = ("title","note","created_at")
    search_fields = ("title",)


admin.site.register(notesModel,adminListView)