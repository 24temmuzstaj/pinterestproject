# Generated by Django 4.2.1 on 2023-08-24 22:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pin', '0009_comment_user_alter_comment_pins_delete_pinsc'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Comment',
        ),
    ]