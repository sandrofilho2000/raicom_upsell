from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    # Certifique-se de usar DecimalField para os campos com valores numéricos
    discount = serializers.DecimalField(max_digits=5, decimal_places=2)
    price = serializers.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        model = Product
        fields = '__all__'
