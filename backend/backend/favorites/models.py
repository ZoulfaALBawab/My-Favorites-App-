from django.db import models

# Create your models here.

 
class Artist(models.Model):  
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('name',)

class Song(models.Model):  
    title = models.CharField(max_length=100)
    artists = models.ManyToManyField(Artist)
    year = models.IntegerField()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)

class Albums(models.Model):  
    title = models.CharField(max_length=100)
    songs = models.ManyToManyField(Song)
    year = models.IntegerField()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('title',)
