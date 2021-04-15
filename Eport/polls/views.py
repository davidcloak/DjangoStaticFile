from django.shortcuts import render

# Create your views here.
def poleMain(request):
    test= {}
    test['test'] = "Sea.jpg"
    return render(request, 'test.html', test)