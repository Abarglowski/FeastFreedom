from django.db import models


class Kitchen(models.Model):
    provider_name = models.CharField(max_length=50)

