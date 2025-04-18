from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

class Variant(models.Model):
    CHANCE_CHOICES = [
        (1, '1 - Very Hard'),
        (2, '2 - Hard'),
        (3, '3 - Medium'),
        (4, '4 - Easy'),
        (5, '5 - Very Easy'),
    ]

    name = models.CharField(max_length=255, verbose_name="Name")

    chances_of_winning = models.IntegerField(
        choices=CHANCE_CHOICES,
        verbose_name="Chance of Winning",
        default=3,
        help_text="This field defines the probability of winning in the game page. 1 is the hardest and 5 is the easiest."
    )
    products = models.ManyToManyField('products.Product', related_name='variants', help_text="Products to be shown on page cart.")

    countdown_minutes = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(60)],
        default=15,
        verbose_name="Countdown (minutes)"
    )

    copy_full_title = models.CharField(max_length=255, verbose_name="Copy section full title", default="🎰 Spin to Win Big! 🎰")
    copy_title_highlight = models.CharField(max_length=255, verbose_name="Copy section title highlight", default="Win Big!")

    gifts_full_title = models.CharField(max_length=255, verbose_name="Gifts section full title", default="Gifts You Might Win")
    gifts_title_highlight = models.CharField(max_length=255, verbose_name="Gifts section title highlight", default="Might Win")

    jackpot_full_title = models.CharField(max_length=255, verbose_name="Jackpot section full title", default="Spin & Win Awesome Prizes")
    jackpot_title_highlight = models.CharField(max_length=255, verbose_name="Jackpot section title highlight", default="Win Awesome Prizes")

    products_table_full_title = models.CharField(max_length=255, verbose_name="Product table full title", default="Check Out Your Musical Picks")
    products_table_title_highlight = models.CharField(max_length=255, verbose_name="Product table title highlight", default="Musical Picks")
    
    jackpot_set = models.ForeignKey('jackpot_set.JackpotSet', on_delete=models.CASCADE, default=1)
    active = models.BooleanField(default=True)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if self.active and not self.pk:
            Variant.objects.filter(active=True).update(active=False)
        elif self.active and self.pk:
            Variant.objects.exclude(pk=self.pk).filter(active=True).update(
                active=False
            )

        super().save(*args, **kwargs)
