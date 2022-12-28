from django.shortcuts import render
from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from django.conf import settings
from .models import Plan
from users.models import UserProfile
import json
import stripe
# Create your views here.


def index(request):
  context = {}
  first = Plan.objects.get(price=99)
  second = Plan.objects.get(price=149)
  third = Plan.objects.get(price=699)
  context['homePage'] = True
  context['first'] = first
  context['second'] = second
  context['third'] = third
  context['API_KEY'] = settings.STRIPE_SECRET_KEY
  return render(request, 'main/index.html',context)


def Services(request):
  context = {}
  context['servicesPage'] = True
  template_name = 'main/services.html'
  return render(request,template_name,context)

def Account(request):
  if request.user.is_authenticated:
        messages.info(request, 'You have been already logged in')
        return redirect('dashboard:home')
  context = {}
  context['accountPagePage'] = True
  template_name = 'main/services.html'
  return render(request,template_name,context)


def About(request):
  context = {}
  context['aboutPage'] = True
  template_name = 'main/about-us.html'
  return render(request,template_name,context)

def Contact(request):
  context = {}
  context['contactPage'] = True
  template_name = 'main/contact.html'
  return render(request,template_name,context)


@csrf_exempt
def AccountWithPay(request,id):
    plan = Plan.objects.get(id=id)
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        data = data.get('data')
        
        user_created = User.objects.create(username=data.get('username'),
                password=data.get('password'),
                email=data.get('email'),
                first_name=data.get('first_name'),
                )
        user_profile , _ = UserProfile.objects.get_or_create(user=user_created)
        user_profile.gender = data.get('gender')
        user_profile.city = data.get('city')
        user_profile.address = data.get('address')
        user_profile.country = data.get('country')
        user_profile.save()
        user = authenticate(request,username=user_created.username, password=data.get('password'))
        login(request,user_created)
        return JsonResponse("acccount created",status=200,safe=False)
    return render(request, "dashboard/page-register.html", {'plan':plan})

@csrf_exempt
def stripe_config(request):
    if request.method == 'GET':
        stripe_config = {'publicKey': settings.STRIPE_PUBLISHABLE_KEY}
        return JsonResponse(stripe_config, safe=False)

@login_required
def MakePayment(request,id):
    if request.method == 'GET':
        plan = Plan.objects.get(id=id)
        domain_url = 'https://ziteso.com/'
        stripe.api_key = settings.STRIPE_SECRET_KEY
        try:
            checkout_session = stripe.checkout.Session.create(
                client_reference_id=request.user.id if request.user.is_authenticated else None,
                success_url=domain_url + 'success/?session_id={CHECKOUT_SESSION_ID}',
                cancel_url=domain_url,
                payment_method_types=['card'],
                mode='subscription',
                line_items=[
                    {
                        'price': plan.stripe_id,
                        'quantity': 1,
                    }
                ]
            )
            return JsonResponse({'sessionId': checkout_session['id']})
        except Exception as e:
            return JsonResponse({'error': str(e)})

def MakePaymentView(request,id):
    plan = Plan.objects.get(id=id)
    context = {}
    context['plan'] = plan
    return render(request,'checkout-session.html',context)

def Success(request):
    request.user.userprofile.paid = True
    request.user.userprofile.save()
    return redirect('dashboard:index')