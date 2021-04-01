from django import forms
from django_countries.fields import CountryField
from django_countries.widgets import CountrySelectWidget

PAYMENT_CHOICES = (
    ('C', 'COD')
)


class CheckoutForm(forms.Form):
    address = forms.CharField(widget=forms.TextInput(attrs={
        'placeholder': 'Q.1 HCM',
        'class': 'form-control'
    }))
    full_name = forms.CharField(widget=forms.TextInput(attrs={
        'placeholder': 'Nguyễn Văn A',
        'class': 'form-control'
    }))
    phone = forms.CharField(widget=forms.NumberInput(attrs={
        'placeholder': '032XXXXXXX',
        'class': 'form-control'
    }))
