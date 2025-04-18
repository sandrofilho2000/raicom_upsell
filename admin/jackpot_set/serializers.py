from rest_framework import serializers
from .models import JackpotSet
from products.serializers import ProductSerializer 

class JackpotSetSerializer(serializers.ModelSerializer):
    gifts = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = JackpotSet
        fields = '__all__'
