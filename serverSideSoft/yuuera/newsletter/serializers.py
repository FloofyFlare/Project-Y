from rest_framework import serializers
from . models import Newsletter
#converts json to models and vice versa
class NewsletterSerializer(serializers.ModelSerializer):
  class Meta:
    model = Newsletter
    feilds = '__all__'
    exclude = ''


