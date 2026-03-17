from django.urls import include, path
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r"tasks", views.TaskViewSet, basename="task")

urlpatterns = [
    # UI page (template) for viewing tasks
    path('tasks/', views.TaskList.as_view(), name='task-list'),
    # API endpoints (JSON)
    path('api/', include(router.urls)),
]