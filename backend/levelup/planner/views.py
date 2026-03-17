from django.shortcuts import render
from django.views import View

from rest_framework import viewsets

from .models import Task
from .serializers import TaskSerializer


# Create your views here.
class TaskList(View):
    def get(self, request):
        tasks = Task.objects.all().order_by("week", "id")
        return render(request, "planner/task_list.html", {"tasks": tasks})


class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by("week", "id")
    serializer_class = TaskSerializer