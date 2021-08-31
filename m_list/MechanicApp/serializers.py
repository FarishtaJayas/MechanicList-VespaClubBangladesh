from rest_framework import serializers
from MechanicApp.models import Mechanics

class MechanicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mechanics
        fields = ('MechanicID','District', 'Address', 'Name', 'Contact')