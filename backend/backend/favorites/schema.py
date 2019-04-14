import graphene
from graphene_django.types import DjangoObjectType, ObjectType
from backend.favorites.models import Artist, Song, Albums

# Create a GraphQL type for the Artist model


class ArtistType(DjangoObjectType):
    class Meta:
        model = Artist

# Create a GraphQL type for the Song model


class SongType(DjangoObjectType):
    class Meta:
        model = Song

# Create a GraphQL type for the Albums model


class AlbumsType(DjangoObjectType):
    class Meta:
        model = Albums

# Create a Query type


class Query(ObjectType):
    artist = graphene.Field(ArtistType, id=graphene.Int())
    song = graphene.Field(SongType, id=graphene.Int())
    albums = graphene.Field(AlbumsType, id=graphene.Int())
    artists = graphene.List(ArtistType)
    songs = graphene.List(SongType)
    albumss = graphene.List(AlbumsType)

    def resolve_artist(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Artist.objects.get(pk=id)

        return None

    def resolve_song(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Song.objects.get(pk=id)

        return None

    def resolve_albums(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Albums.objects.get(pk=id)

        return None

    def resolve_artists(self, info, **kwargs):
        return Artist.objects.all()

    def resolve_songs(self, info, **kwargs):
        return Song.objects.all()

    def resolve_albumss(self, info, **kwargs):
        return Albums.objects.all()
