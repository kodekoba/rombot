from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^job$', views.find_job),
    url(r'^jobs$', views.all_jobs),
    url(r'^jobs/(?P<id>[\w-]+)/positions$', views.related_jobs),
]