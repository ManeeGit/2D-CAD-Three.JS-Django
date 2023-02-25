from django.urls import path

from . import views

urlpatterns = [
    path('login/',views.Login,name='login'),
    path('signup/',views.Signup,name='signup'),
    path('home/',views.Home,name='home'),
    path('logout/',views.Logout,name='logout'),
    path('index/',views.index,name='index'),
]