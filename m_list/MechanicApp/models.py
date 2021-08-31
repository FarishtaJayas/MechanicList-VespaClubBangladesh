from django.db import models

# Create your models here.

class Mechanics(models.Model):
    MechanicID = models.AutoField(primary_key=True) 
    District = models.CharField(max_length=500)
    Address = models.CharField(max_length=500)
    Name = models.CharField(max_length=500)
    Contact = models.CharField(max_length=11)   