from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.calculator,name='calculator' ),
    path('about/',views.about ,name='about'),
    path('currency-converter/',views.currency ,name='currency_convert'),
    path('temperature/',views.temperature ,name='temperature'),
    path('time/',views.time ,name='time'),
    

]
