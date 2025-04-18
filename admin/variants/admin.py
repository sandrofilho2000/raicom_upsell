from django.contrib import admin
from .models import Variant
from django_summernote.widgets import SummernoteWidget 
from django.db import models 

@admin.register(Variant)
class VariantAdmin(admin.ModelAdmin):
    list_display = ['name', 'copy_full_title', "chances_of_winning", "active"]
    list_editable = ["chances_of_winning", 'active']

    formfield_overrides = { 
        models.TextField: {'widget': SummernoteWidget}, 
    } 
