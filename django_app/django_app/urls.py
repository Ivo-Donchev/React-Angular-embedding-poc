import json
from surveys.models import Survey
from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt



@csrf_exempt
def surveys_create(request):
    Survey.objects.create(**json.loads(request.body))

    return HttpResponse('')


@csrf_exempt
def surveys_list(request):
    return HttpResponse(
        json.dumps(
            list(Survey.objects.values('id', 'answer_1', 'answer_2'))
        )
    )


urlpatterns = [
    path('create/', surveys_create),
    path('list/', surveys_list),
]
