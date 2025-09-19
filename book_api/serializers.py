from rest_framework import serializers
from .models import Book, Review

class Bookserializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class Reviewserializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

