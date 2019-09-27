from rest_framework import serializers
from allauth.account import app_settings as allauth_settings
from allauth.utils import email_address_exists
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email

from django.contrib.auth import get_user_model


class RegisterSerializer(serializers.Serializer):
    email = serializers.EmailField(required=allauth_settings.EMAIL_REQUIRED)
    password = serializers.CharField(required=True, write_only=True)
    is_sp = serializers.BooleanField(required=True, write_only=True)
    name = serializers.CharField(required=True, write_only=True)

    def validate_email(self, email):
        email = get_adapter().clean_email(email)
        if allauth_settings.UNIQUE_EMAIL:
            if email and email_address_exists(email):
                raise serializers.ValidationError(
                    _("A user is already registered with this e-mail address."))
        return email

    def validate_password(self, password):
        return get_adapter().clean_password(password)

    def get_cleaned_data(self):
        return {
            'name': self.validated_data.get('name', ''),
            'is_sp': self.validated_data.get('is_sp', ''),
            'password': self.validated_data.get('password', ''),
            'email': self.validated_data.get('email', ''),
        }

    # def custom_signup(self, request, user):
    #     user.is_sp = self.validated_data.get('is_sp', '')
    #     user.name = self.validated_data.get('name', '')

    def save(self, request):
        # adapter = get_adapter()
        self.cleaned_data = self.get_cleaned_data()
        new_user = get_user_model().objects.create_user(
            email=self.cleaned_data['email'],
            name=self.cleaned_data['name'],
            is_sp=self.cleaned_data['is_sp'],
            password=self.cleaned_data['password']
        )
        # user = adapter.new_user(request)
        # self.cleaned_data = self.get_cleaned_data()
        # adapter.save_user(request, user, self)
        # setup_user_email(request, user, [])
        # self.custom_signup(request, user)
        # user.save()
        return new_user
