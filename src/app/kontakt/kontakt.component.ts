import { PovratnaInformacija, KontaktTip } from './../deljeno/povratnaInformacija';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  @ViewChild('iform') infoFormDirective;

  infoForm: FormGroup;
  info: PovratnaInformacija;
  kontaktTip = KontaktTip;

  formErrors = {
    'ime': '',
    'prezime': '',
    'telefon': '',
    'email': ''
  };

  validationMessages = {
    'ime': {
      'required':      'Ime je obavezno.',
      'minlength':           'Ime mora da sadrži najmanje 2 karaktera.',
      'maxlength':           'Ime ne sme da bude duže od 25 karaktera.'
    },
    'prezime': {
      'required':      'Prezime je obavezno.',
      'minlength':           'Prezime mora da sadrži najmanje 2 karaktera.',
      'maxlength':           'Prezime ne sme da bude duže od 25 karaktera.'
    },
    'telefon': {
      'required':      'Broj telefona je obavezan.',
      'pattern':        'Broj telefona mora da sadrži samo brojeve.'
    },
    'email': {
      'required':      'Email je obaveznan.',
      'email':         'Email nije u ispravnom formatu.'
    },
  };

  constructor(private pi: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.infoForm = this.pi.group({
      ime: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      prezime: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telefon: [0, [Validators.required, Validators.pattern] ],
      email: ['', [Validators.required, Validators.email] ],
      potvrda: false,
      kontaktTip: 'None',
      poruka: ''
    });

    this.infoForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.infoForm) { return; }
    const form = this.infoForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.info = this.infoForm.value;
    console.log(this.info);
    this.infoForm.reset({
      ime: '',
      prezime: '',
      telefon: 0,
      email: '',
      potvrda: false,
      kontaktTip: 'None',
      poruka: ''
    });
    this.infoFormDirective.resetForm();
  }

}
