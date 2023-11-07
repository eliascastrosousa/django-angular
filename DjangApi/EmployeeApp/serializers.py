from rest_framework import serializers, generics
from .models import Departments, Employees

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ('DepartmentId',
                  'DepartmentName')
        
class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = '__all__'

class EmployeeImageUploadView(generics.CreateAPIView):
    queryset = Employees.objects.all()
    serializer_class = EmployeeSerializer