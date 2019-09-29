from django.db import models

# Create your models here.


class Kitchen(models.Model):
    name = models.CharField(max_length=50)
    work_mon = models.BooleanField(default=False)
    work_tue = models.BooleanField(default=False)
    work_wed = models.BooleanField(default=False)
    work_thu = models.BooleanField(default=False)
    work_fri = models.BooleanField(default=False)
    work_sat = models.BooleanField(default=False)
    work_sun = models.BooleanField(default=False)
    # time(hour, minute and second)
    # c = time(hour = 11, minute = 34, second = 56)
    start_time = models.TimeField()
    end_time = models.TimeField()
    image = models.ImageField(
        upload_to='images/kitchens/', default='images/kitchen/default.jpg')

    def no_of_items(self):
        numberOfItems = MenuItem.objects.filter(kitchen=self)
        return len(numberOfItems)


class MenuItem(models.Model):
    kitchen = models.ForeignKey(
        'Kitchen', on_delete=models.CASCADE, related_name='menu')
    name = models.CharField(max_length=255)
    is_veg = models.BooleanField(default=False)
    price = models.DecimalField(decimal_places=2, max_digits=8)
    description = models.CharField(max_length=255, blank=True)
