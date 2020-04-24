import { JeloService } from './../servisi/jelo.service';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Jelo } from './../deljeno/jelo';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Komentar } from './../deljeno/komentar';

@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})
export class DetaljiComponent implements OnInit {

  jelo: Jelo;
  idsJela: string[];
  prethodni: string;
  sledeci: string;
  @ViewChild('kform') komentariFormDirective;
  komentariForm: FormGroup;
  komentar: Komentar;

  formErrors = {
    'autor': '',
    'komentar': '',
  };

  validationMessages = {
    'autor': {
      'required': 'Ime autora je obavezno.',
    },
    'komentar': {
      'required': 'Poruka je obavezna.',
    },
  };

  constructor(private jeloService: JeloService,
              private route: ActivatedRoute,
              private location: Location,
              private ki: FormBuilder,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.createForm();

    this.jeloService.getIdsJela().subscribe(idsJela => this.idsJela = idsJela);
    this.route.params.pipe(switchMap((params: Params) => this.jeloService.getJelo(params['id'])))
    .subscribe(jelo => { this.jelo = jelo; this.setPrethodniSledeci(jelo.id); });
  }

  goBack(): void {
    this.location.back();
  }

  setPrethodniSledeci(idJela: string) {
    const index = this.idsJela.indexOf(idJela);
    this.prethodni = this.idsJela[(this.idsJela.length + index - 1) % this.idsJela.length];
    this.sledeci = this.idsJela[(this.idsJela.length + index + 1) % this.idsJela.length];
  }

  createForm(): void {
    this.komentariForm = this.ki.group({
      autor: ['', Validators.required ],
      komentar: ['', Validators.required ],
      rejting: 5
    });

    this.komentariForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.komentariForm) { return; }
    const form = this.komentariForm;
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
    this.komentar = this.komentariForm.value;
    this.komentar.datum = new Date().toISOString();
    console.log(this.komentar);
    this.jelo.komentari.push(this.komentar);
    this.komentariFormDirective.resetForm();
    this.komentariForm.reset({
      autor: '',
      komentar: '',
      rejting: 5
    });
  }
}
