from django.contrib import admin
from django.urls import path
from scorePrediction import views

urlpatterns = [
    path('predict/',views.predict),
    path('', views.base)
    # path('', views.predict)
]
