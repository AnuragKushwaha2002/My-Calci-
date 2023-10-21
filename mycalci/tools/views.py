from django.shortcuts import render

# Create your views here.
def calculator(request):
    return render(request,'calculator.html')
def about(request):
    return render(request,'about.html')
def currency(request):
    return render(request,'currency_convert.html')
def temperature(request):
    return render(request,'temperature_convert.html')
def time(request):
    return render(request,'time.html')