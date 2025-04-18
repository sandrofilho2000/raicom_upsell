from variants.views import VariantsListCreate, VariantDetail
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/variants_list/', VariantsListCreate.as_view(), name='variants'),
    path('api/variants/<int:pk>', VariantDetail.as_view(), name='variant'),
    path('api/variants/', VariantDetail.as_view(), name='variant_active'),
    path("summernote/", include("django_summernote.urls")), 

]
