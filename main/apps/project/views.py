from django.shortcuts import render, redirect, HttpResponse
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Job
import requests
import json
from fuzzywuzzy import process

@csrf_exempt
def find_job(request):
    if request.method == 'POST':
        body = json.loads(request.body)
        title = body['title'].split(' ')
        title = '%20'.join(title)
        response = requests.get('http://api.dataatwork.org/v1/jobs/autocomplete?begins_with={}'.format(title)).json()
        # using fuzzy and Lehvenstein's algorithm for approximate match
        client_string = body['title'].lower()
        options = []
        for i in response:
            options.append(i['normalized_job_title'])
        closest_match = process.extractOne(client_string, options)
        closest_object = {}
        for i in response:
            if i['normalized_job_title'] == closest_match[0]:
                closest_object = i
        
        Job.objects.create(title=body['title'], location=body['location'], title_id=closest_object['uuid'], normalized_title=closest_object['normalized_job_title'])
        message = {"msg":"Successfully saved"}
        return JsonResponse(message)
    else:
        message = {"msg":"Not a valid method for this route"}
        return JsonResponse(message)

def all_jobs(request):
    response = list(Job.objects.all().values())
    return JsonResponse(response, safe=False)

def related_jobs(request,id):
    index = int(id[32:])
    title_id = id[:32]
    job = Job.objects.filter(title_id=title_id)
    if len(job) > 1:
        job = job[index]
    else:
        job = job[0]
    description = job.title.split(' ')
    description = '+'.join(description)
    location = job.location.lower().split(' ')
    location = '+'.join(location)
    response = requests.get('https://jobs.github.com/positions.json?description={}&location={}'.format(description, location)).json()
    return JsonResponse(response, safe=False)
