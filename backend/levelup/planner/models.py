from django.db import models
from django.contrib.auth.models import User
    

# Create your models here.
class StudyPlan(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    topic = models.CharField(max_length=255)
    job_description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.topic
    
class Skill(models.Model):
    StudyPlan = models.ForeignKey(StudyPlan, related_name='skills', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Task(models.Model):
    StudyPlan = models.ForeignKey(StudyPlan, related_name='tasks', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    week = models.IntegerField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title