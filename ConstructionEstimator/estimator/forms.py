from django import forms 
from django.forms import TextInput, Textarea,EmailInput
from .models import Contact



class ContactForm(forms.ModelForm):
    class Meta:
        model =Contact
        fields = '__all__'
        widgets = {
            'name': TextInput(attrs={'class': 'form-control', 'id': 'name', 'placeholder': 'Your Name'}),
            'email': EmailInput(attrs={'class': 'form-control', 'id': 'email','placeholder':'Email'}),
            'subject': TextInput(attrs={'class': 'form-control', 'id': 'name', 'placeholder': 'Subject'}),
            'message': Textarea(attrs={'class': 'form-control', 'id': 'messageon',
                                                'placeholder': 'Write Your Message','cols':30,'rows':10}),
            
        }
