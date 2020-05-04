from django.urls import path
from myApp import views


urlpatterns = [
    path('', views.home, name='home'),
    path('book_details/', views.bookDetails, name='book_details'),
]
