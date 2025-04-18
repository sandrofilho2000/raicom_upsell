from django.contrib import admin
from .models import Product
from django.utils.html import format_html

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['img_preview', 'name', 'price', 'discount']

    def img_preview(self, obj):
        image_url = obj.image if obj.image else 'https://www.svgrepo.com/show/508699/landscape-placeholder.svg'
        return format_html(
            """<a style="display: flex; align-items: center; gap: 4px" href="{}" target="_blank">
                <img style=' min-height: 50px; max-width: 70px; border-radius: 4px; object-fit: contain ' src='{}'/>
            </a>""",
            image_url,
            image_url
        )

    img_preview.short_description = "Imagem"