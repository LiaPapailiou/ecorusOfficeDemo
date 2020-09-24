# Generated by Django 3.1.1 on 2020-09-24 12:21

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('office', '0006_remove_person_person_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='office',
            name='employee',
            field=models.ForeignKey(default=django.utils.timezone.now, on_delete=django.db.models.deletion.CASCADE, to='office.person'),
            preserve_default=False,
        ),
    ]