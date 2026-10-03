from rest_framework import serializers
from .models import notesModel


class Notes_serializers(serializers.ModelSerializer):
    class Meta:
        model = notesModel
        fields = '__all__'