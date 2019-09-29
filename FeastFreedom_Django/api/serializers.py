# from django.contrib.auth.models import User, Group  # importing user from auth models

from rest_framework import serializers
from .models import Kitchen, MenuItem


class KitchenSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Kitchen
        fields = ('name', 'work_mon', 'work_tue', 'work_wed', 'work_thu', 'work_fri', 'work_sat', 'work_sun',
                  'start_time', 'end_time', 'image', 'no_of_items')


class MenuSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MenuItem
        fields = ('kitchen', 'name', 'is_veg', 'price', 'description')




# class GroupSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Group
#         fields = ['url', 'name']
