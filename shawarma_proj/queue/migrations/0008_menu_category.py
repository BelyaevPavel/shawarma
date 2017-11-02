# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-10-22 04:39
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('queue', '0007_menucategory'),
    ]

    operations = [
        migrations.AddField(
            model_name='menu',
            name='category',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='queue.MenuCategory'),
            preserve_default=False,
        ),
    ]
