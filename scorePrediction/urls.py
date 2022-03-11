from django.contrib import admin
from django.urls import path
from scorePrediction import views

urlpatterns = [
    path('', views.predict)
    # path('', views.predict)
]
