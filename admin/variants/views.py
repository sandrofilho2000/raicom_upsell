from rest_framework.response import Response
from rest_framework import generics
from .models import Variant
from .serializers import VariantSerializer


class VariantsListCreate(generics.ListCreateAPIView):
    serializer_class = VariantSerializer
    queryset = Variant.objects.all()

    def get(self, request, *args, **kwargs):
        variants = self.get_queryset()
        serializer = self.get_serializer(variants, many=True)
        data = serializer.data

        list = []

        for variant in data:
            obj = {}
            obj['id'] = variant['id']
            obj['name'] = variant['name']

            list.append(obj)


        return Response(list)
    


class VariantDetail(generics.RetrieveAPIView):
    serializer_class = VariantSerializer
    queryset = Variant.objects.all()

    def get(self, request, *args, **kwargs):
        variant_id = kwargs.get('pk') 
        if variant_id:
            try:
                instance = self.get_object()
            except Variant.DoesNotExist:
                return Response({"error": "Variant not found."}, status=404)
        else:
            instance = Variant.objects.filter(active=True).first()

            if not instance:
                return Response({"error": "No active variant found."}, status=404)

        data = self.get_serializer(instance).data

        for product in data.get('products', []):
            product['discount'] = float(product['discount']) 
            product['price'] = float(product['price'])  

        for gift in data.get('jackpot_set', {}).get('gifts', []):
            gift['discount'] = float(gift['discount']) 
            gift['price'] = float(gift['price']) 

        obj = {
            "id": data['id'],
            "name": data['name'],
            "chances_of_winning": data['chances_of_winning'],
            "countdown_minutes": data['countdown_minutes'],
            "gifts": data['jackpot_set']['gifts'],
            "products": data['products'],
            "copy_title": {
                "full_title": data['copy_full_title'],
                "highlight": data['copy_title_highlight']
            },
            "gifts_title": {
                "full_title": data['gifts_full_title'],
                "highlight": data['gifts_title_highlight']
            },
            "jackpot_title": {
                "full_title": data['jackpot_full_title'],
                "highlight": data['jackpot_title_highlight']
            },
            "products_table_title": {
                "full_title": data['products_table_full_title'],
                "highlight": data['products_table_title_highlight']
            },
        }

        return Response(obj)