# -*- encoding: utf-8 -*-
from django.shortcuts import render
from django.views.generic import TemplateView


class IndexTemplateView(TemplateView):
	template_name = 'index.html'