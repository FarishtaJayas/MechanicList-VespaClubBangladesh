from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
# Create your views here.
from MechanicApp.models import Mechanics
from MechanicApp.serializers import MechanicSerializer  

@csrf_exempt
def mechanicapi(request, id=0):
    if request.method == 'GET':
        mechanics = Mechanics.objects.all()
        mechanics_serializer = MechanicSerializer(mechanics,many = True)
        return JsonResponse(mechanics_serializer.data,safe = False)
    elif request.method == 'POST':
        mechanic_data = JSONParser().parse(request)
        mechanics_serializer = MechanicSerializer(data = mechanic_data)
        if mechanics_serializer.is_valid():
            mechanics_serializer.save()
            return JsonResponse("Added Successfully", safe = False)
        return JsonResponse("Failed to Add", safe = False)
    elif request.method == "PUT":
        mechanic_data = JSONParser().parse(request)
        mechanic = Mechanics.objects.get(MechanicID = mechanic_data['MechanicID'])
        mechanics_serializer = MechanicSerializer(mechanic, data=mechanic_data)
        if mechanics_serializer.is_valid():
            mechanics_serializer.save()
            return JsonResponse("Updated Successfully", safe = False)
        return JsonResponse("Failed to Udpate")
    elif request.method == 'DELETE':
        mechanic = Mechanics.objects.get(MechanicID = id)
        mechanic.delete()
        return JsonResponse("Deleted Successfully", safe = False)
        
        
