# Generated by Django 3.2.6 on 2021-09-08 06:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inventory', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='inventory',
            name='count',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]