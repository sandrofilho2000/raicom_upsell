# Generated by Django 5.2 on 2025-04-17 23:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jackpot_set', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='jackpotsetproduct',
            name='quantity',
        ),
    ]
