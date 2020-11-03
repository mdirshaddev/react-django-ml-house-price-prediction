import uuid
from django.db import models

class Prediction(models.Model):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4, unique=True)
    name = models.CharField(max_length=15)
    total_sqft = models.FloatField(default=0)
    bath = models.IntegerField(default=0)
    bhk = models.IntegerField(default=0)
    location = models.CharField(max_length=40)
    price = models.FloatField(default=0)

    def __str__(self):
        return self.name