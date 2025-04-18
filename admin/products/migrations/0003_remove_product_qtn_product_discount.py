# Generated by Django 5.2 on 2025-04-17 23:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_remove_product_discount'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='qtn',
        ),
        migrations.AddField(
            model_name='product',
            name='discount',
            field=models.DecimalField(decimal_places=2, default=0.0, max_digits=5, verbose_name='Discount (%)'),
        ),
    ]
