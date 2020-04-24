import { JeloService } from './../servisi/jelo.service';
import { Jelo } from './../deljeno/jelo';
import { Component, OnInit, Inject } from '@angular/core';




@Component({
  selector: 'app-meni',
  templateUrl: './meni.component.html',
  styleUrls: ['./meni.component.css']
})
export class MeniComponent implements OnInit {

  jela: Jelo[];

  constructor(private jeloService: JeloService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.jeloService.getJela().subscribe(jela => this.jela = jela);
  }

}
