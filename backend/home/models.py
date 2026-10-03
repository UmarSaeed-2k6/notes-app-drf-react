from django.db import models

# Create your models here.


class notesModel(models.Model):
    title = models.CharField(max_length=200)
    note = models.TextField()
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title