# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2018-01-06 04:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('queue', '0018_order_is_grilling'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staffcategory',
            name='title',
            field=models.CharField(max_length=20),
        ),
    ]
