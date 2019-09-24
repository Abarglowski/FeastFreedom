# from django.contrib.auth.models import User, Group  # importing user from auth models
from django.contrib.auth import get_user_model
from rest_framework import serializers
User = get_user_model()


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'full_name', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

        def create(self, validated_data):
            user = User.objects.create_user(**validated_data)  # django hashes password
            return user


# class GroupSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Group
#         fields = ['url', 'name']
