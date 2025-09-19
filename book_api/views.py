from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from .serializers import (Bookserializer, Reviewserializer)
from .models import Book, Review

# Create your views here.

class BookViews(viewsets.ModelViewSet):
    serializer_class = Bookserializer
    queryset = Book.objects.all()

class ReviewViews(viewsets.ModelViewSet):
    serializer_class = Reviewserializer
    queryset = Review.objects.all()
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]
