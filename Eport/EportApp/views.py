from django.shortcuts import render
from django.template.loader import render_to_string

# Create your views here.
ToAll = {}

def OnWhat(where):
    test = render_to_string('nav.html')
    test = test.replace(where+"Active", 'active')
    ToAll['nav'] = test

def landing(request):
    OnWhat('Home')
    return render(request, 'index.html', ToAll)

def about(request):
    OnWhat('AboutMe')
    return render(request, 'about_me.html', ToAll)

def arifacts(request):
    OnWhat('MyProjects')
    return render(request, 'artifacts.html', ToAll)

def assignmentProjects(request):
    OnWhat('Home')
    return render(request, 'assignmentProjects.html', ToAll)

def personal(request):
    OnWhat('Home')
    return render(request, 'personal.html', ToAll)