# Generated by Django 5.2 on 2025-04-17 23:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Name')),
                ('image', models.URLField(verbose_name='Image URL')),
                ('qtn', models.PositiveIntegerField(default=0, verbose_name='Quantity')),
                ('discount', models.DecimalField(decimal_places=2, default=0.0, max_digits=5, verbose_name='Discount (%)')),
                ('price', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Price')),
            ],
        ),
    ]
