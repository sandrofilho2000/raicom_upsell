from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Product(models.Model):
    name = models.CharField(max_length=255, verbose_name="Name")
    image = models.URLField(verbose_name="Image URL")
    discount = models.DecimalField(max_digits=5, decimal_places=2, verbose_name="Discount (%)", default=0.00,         validators=[MinValueValidator(1), MaxValueValidator(100)],
)
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Price")
    qtn = models.PositiveIntegerField(verbose_name="Quantity", default=1)

    def __str__(self):
        return self.name
