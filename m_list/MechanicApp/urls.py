from django.conf.urls import url
from MechanicApp import views

urlpatterns = [
    url(r'^mechanic$', views.mechanicapi),
    url(r'^mechanic/([0-9]+)$', views.mechanicapi)
]