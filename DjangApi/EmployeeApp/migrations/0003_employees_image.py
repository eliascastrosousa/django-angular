# Generated by Django 4.2.6 on 2023-11-01 13:30

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("EmployeeApp", "0002_alter_departments_departmentid_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="employees",
            name="image",
            field=models.FileField(default=1, upload_to="images/"),
            preserve_default=False,
        ),
    ]
