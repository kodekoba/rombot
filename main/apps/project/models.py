from django.db import models

# Create your models here.
class Job(models.Model):
    title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    title_id = models.CharField(max_length=255)
    normalized_title = models.CharField(max_length=255)