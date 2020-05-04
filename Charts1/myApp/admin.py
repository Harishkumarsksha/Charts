from django.contrib import admin

# Register your models here.
from .models import Books


class BooksAdmin(admin.ModelAdmin):
    list_display = ('book', 'price', 'date_added', 'date_updated')


admin.site.register(Books, BooksAdmin)
