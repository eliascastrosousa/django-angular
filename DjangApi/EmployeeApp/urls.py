from EmployeeApp import views
from django.urls import re_path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    #path('department/$', views.departmentApi, name='department'),
    #path('department/<id>', views.departmentApi, name='department'),
    re_path(r'^department/$', views.departmentApi),
    re_path(r'^department/([0-9]+)$', views.departmentApi),
    re_path(r'^employee/$', views.employeeApi),
    re_path(r'^employee/([0-9]+)$', views.employeeApi),
    re_path(r'^SaveFile$', views.SaveFile),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT )