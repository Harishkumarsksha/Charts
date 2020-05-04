from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
from .models import Books
import json


def home(request):
    context = {}
    return render(request, 'myApp/base.html', context)


def bookDetails(request):
    print('####################Request data', request.GET)
    books = Books.objects.all().values('book')
    prices = Books.objects.all().values('price')
    abooks = []
    aprices = []
    for book in books:
        abooks.append(book)
    for price in prices:
        aprices.append(price)

    context = {"abooks": abooks, "aprices": aprices}
    # # data = json.dumps(context)
    # # prasedata = json.loads(data)
    # print('###############3', context[abooks])
    return HttpResponse(json.dumps(context))
