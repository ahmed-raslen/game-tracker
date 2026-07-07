from django.urls import path
from .views import GameDetailView, GameListCreateView

urlpatterns = [
    path('games/', GameListCreateView.as_view(), name='game-list-create'),
    path('games/<int:pk>/', GameDetailView.as_view(), name='game-detail'),
]