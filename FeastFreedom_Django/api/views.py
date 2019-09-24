from django.contrib.auth import get_user_model
from rest_framework import viewsets
from api.serializers import UserSerializer  # GroupSerializer
User = get_user_model()

class UserViewSet(viewsets.ModelViewSet):
    pass
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-timestamp')
    serializer_class = UserSerializer


# class GroupViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer
