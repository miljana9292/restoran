import { LiderService } from './../servisi/lider.service';
import { Lider } from './../deljeno/lider';
import { PromocijaService } from './../servisi/promocija.service';
import { Promocija } from './../deljeno/promocija';
import { JeloService } from './../servisi/jelo.service';
import { Jelo } from './../deljeno/jelo';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent implements OnInit {

  jelo: Jelo;
  promocija: Promocija;
  lider: Lider;

  constructor(private jeloService: JeloService,
              private promocijaService: PromocijaService,
              private liderService: LiderService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.jeloService.getIzabranoJelo().subscribe(jelo => this.jelo = jelo);
    this.promocijaService.getIzabranaPromocija().subscribe(promocija => this.promocija = promocija);
    this.liderService.getIzabraniLider().subscribe(lider => this.lider = lider);
  }

}
