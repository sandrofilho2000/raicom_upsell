from rest_framework import serializers
from .models import Variant
from jackpot_set.serializers import JackpotSetSerializer
from products.serializers import ProductSerializer

class VariantSerializer(serializers.ModelSerializer):
    jackpot_set = JackpotSetSerializer(read_only=True)
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Variant
        fields = '__all__'
