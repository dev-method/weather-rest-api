from django.db import models

# Create your models here.
class Weather_Params(models.Model):
    id = models.AutoField(primary_key=True)
    date=models.CharField('Date', max_length=20)
    temp = models.FloatField('Temperature')
    wind=models.FloatField('Wind speed')
    pressure = models.FloatField('Wind speed')

    class Meta:
        verbose_name = ('Weather_param')
        verbose_name_plural = ('Weather_params')

    def __str__(self):
        return u'%s' % self.date
