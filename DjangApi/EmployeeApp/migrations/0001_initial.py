# Generated by Django 4.2.6 on 2023-10-26 17:06

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Departments",
            fields=[
                (
                    "DepartmentId",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                        verbose_name="id",
                    ),
                ),
                (
                    "DepartmentName",
                    models.CharField(max_length=255, verbose_name="Nome"),
                ),
                (
                    "created",
                    models.DateTimeField(auto_now_add=True, verbose_name="created"),
                ),
                (
                    "modified",
                    models.DateTimeField(auto_now=True, verbose_name="modified"),
                ),
            ],
        ),
        migrations.CreateModel(
            name="Employees",
            fields=[
                (
                    "EmployeeId",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                        verbose_name="id",
                    ),
                ),
                (
                    "EmployeeName",
                    models.CharField(
                        max_length=255, verbose_name="Nome do Funcionario"
                    ),
                ),
                (
                    "Department",
                    models.CharField(max_length=255, verbose_name="Departamento"),
                ),
                ("DateOfJoining", models.DateField()),
                (
                    "PhotoFileName",
                    models.CharField(
                        max_length=100, verbose_name="Foto do Funcionario"
                    ),
                ),
            ],
        ),
    ]
