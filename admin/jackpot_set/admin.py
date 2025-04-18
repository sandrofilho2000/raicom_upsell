# admin.py

from django.contrib import admin
from .models import JackpotSet, JackpotSetProduct
from products.models import Product

class JackpotSetProductInline(admin.TabularInline):
    model = JackpotSetProduct
    extra = 1

@admin.register(JackpotSet)
class JackpotSetAdmin(admin.ModelAdmin):
    inlines = [JackpotSetProductInline]
    list_display = ['name']

