# Generated by Django 5.2 on 2025-04-18 00:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jackpot_set', '0002_remove_jackpotsetproduct_quantity'),
        ('products', '0004_alter_product_discount'),
    ]

    operations = [
        migrations.RenameField(
            model_name='jackpotsetproduct',
            old_name='product',
            new_name='gift',
        ),
        migrations.AlterUniqueTogether(
            name='jackpotsetproduct',
            unique_together={('jackpot_set', 'gift')},
        ),
    ]
