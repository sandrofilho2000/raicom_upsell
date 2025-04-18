from django.contrib import admin
from .models import Variant

@admin.register(Variant)
class VariantAdmin(admin.ModelAdmin):
    list_display = ['name', "chances_of_winning", "active"]
    list_editable = ["chances_of_winning", 'active']