from django.urls import path
from . import views

urlpatterns = [
  path('',views.index,name='home'),
  path('services',views.Services,name='services'),
  path('about',views.About,name='about'),
  path('contact',views.Contact,name='contact'),
  path('register/<int:id>/',views.AccountWithPay,name='register'),
  path('make_payment/<int:id>/',views.MakePaymentView,name='make_payment'),
  path('config/', views.stripe_config),
  path('success/', views.Success),
  path('create-checkout-session/<int:id>/', views.MakePayment),
]