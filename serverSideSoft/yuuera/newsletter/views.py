from rest_framework.response import Response
from rest_framework import generics
from . models import Newsletter
from . serializers import NewsletterSerializer
# Create your views here.

class NewsletterView(generics.CreateAPIView):
  serializer_class = NewsletterSerializer

  def perform_create(self, serializer):
    return serializer.save(email=self.request.data.get("email"))