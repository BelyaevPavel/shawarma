# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2018-02-05 17:28
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('queue', '0021_auto_20180121_1013'),
    ]

    operations = [
        migrations.CreateModel(
            name='OrderOpinion',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mark', models.IntegerField(default=0)),
                ('note', models.TextField(blank=True, max_length=1000, null=True)),
                ('order', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='queue.Order')),
            ],
        ),
    ]