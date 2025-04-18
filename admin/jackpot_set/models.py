from django.db import models

class JackpotSet(models.Model):
    name = models.CharField(max_length=255, verbose_name="Name")
    gifts = models.ManyToManyField('products.Product', through='JackpotSetProduct', related_name='jackpot_sets')

    def __str__(self):
        return self.name

class JackpotSetProduct(models.Model):
    jackpot_set = models.ForeignKey('JackpotSet', on_delete=models.CASCADE)
    gift = models.ForeignKey('products.Product', on_delete=models.CASCADE)

    class Meta:
        unique_together = ('jackpot_set', 'gift')

    def __str__(self):
        return f"{self.gift.name} in {self.jackpot_set.name}"