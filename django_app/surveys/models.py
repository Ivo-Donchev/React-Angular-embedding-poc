from django.db import models


class Survey(models.Model):
    answer_1 = models.CharField(max_length=100)
    answer_2 = models.CharField(max_length=100)
