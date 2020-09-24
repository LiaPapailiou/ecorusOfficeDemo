# Generated by Django 3.1.1 on 2020-09-24 09:54

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('office', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='person',
            old_name='peerson_age',
            new_name='person_age',
        ),
        migrations.AlterField(
            model_name='office',
            name='peopleWorking',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=20), default='list', null=True, size=None),
        ),
    ]
