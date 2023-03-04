from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth.models import User,auth
from django.contrib.auth import authenticate,logout,login
from django.contrib import messages
from django.contrib.auth.decorators import login_required



def index(request):
    return render (request,'index.html')


@login_required
def Home(request):
    if  request.user.is_authenticated:
        return render(request, 'home.html')
    return render (request,'login.html')

@login_required
def Logout(request):
    logout(request)
    return render (request,'logout.html')


def Signup(request):
    if request.method=='POST':
        first_name=request.POST.get('first_name')
        last_name=request.POST.get('last_name')
        username=request.POST.get('username')
        email=request.POST.get('email')
        password1=request.POST.get('password1')
        password2=request.POST.get('password2')

        if password1 == '' or password2=='':
            messages.info(request,'Password must not be empty !')
            return redirect('signup')
        if email== '':
            messages.info(request,'EMail must not be empty !')
            return redirect('signup')
        if username== '':
            messages.info(request,'Username should not be empty !')
            return redirect('signup')
        if first_name== '':
            messages.info(request,'Firstname must not be empty !')
            return redirect('signup')

        elif password1 == password2:
            if User.objects.filter(username=username).exists():
                messages.info(request,'Username already Taken by another user')
                return redirect('signup')
            elif User.objects.filter(email=email).exists():
                messages.info(request,'Email Already Exists')
                return redirect('signup')
            else:
                user = User.objects.create_user(username=username,password=password1,email=email,first_name=first_name,last_name=last_name)
                user.save();
                messages.info(request,'User Registered Successfully')
                return redirect('login')
        else:
            messages.info(request,'Passwords mismatch')
            return redirect('signup')

    else:
        return render (request,'signup.html')
       
        

    

# @login_required
def Login(request):
    if request.method=='POST':
        username=request.POST['username']
        password=request.POST['password']

        user = auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('home')
        else:
            messages.info(request,'Invalid credentials')
            return redirect ('login')
              
    else:
        return render (request,'login.html')

