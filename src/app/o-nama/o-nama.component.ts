import { LiderService } from './../servisi/lider.service';
import { Lider } from './../deljeno/lider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-nama',
  templateUrl: './o-nama.component.html',
  styleUrls: ['./o-nama.component.css']
})
export class ONamaComponent implements OnInit {

  lideri: Lider[];

    constructor(private liderService: LiderService) { }

  ngOnInit() {
    this.liderService.getLideri().subscribe(lideri => this.lideri = lideri);
  }
}
