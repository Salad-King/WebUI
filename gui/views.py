from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.generic import View

import random
# Create your views here.


class LoginView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'login.html', {})


class HomeView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'status.html', {})


class AboutView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'about.html', {})


class ReferenceView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'reference.html', {})
