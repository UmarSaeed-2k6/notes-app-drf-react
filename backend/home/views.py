from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import notesModel
from .serializers import Notes_serializers
# Create your views here.


@api_view(['GET','POST'])

def api_of_notes(request):
    if request.method == "GET":
        notes = notesModel.objects.all()
        serializer = Notes_serializers(notes,many = True)

        return Response(serializer.data)

    if request.method == "POST":
        serializer = Notes_serializers(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


def homepa(request):
    return HttpResponse("this is home page")