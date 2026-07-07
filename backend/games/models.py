from django.db import models

class Game(models.Model):
    status_choices = [
        ('playing', 'Playing'),
        ('completed', 'Completed'),
        ('wishlist', 'Wishlist'),
        ('dropped', 'Dropped'),
    ]
    name= models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=status_choices , default='playing')
    rating = models.IntegerField(null=True, blank=True)
    def __str__(self):
        return self.name