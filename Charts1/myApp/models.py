from django.db import models

# Create your models here.


class Books(models.Model):
    book = models.CharField(max_length=255, null=True, blank=True)
    price = models.FloatField()
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
