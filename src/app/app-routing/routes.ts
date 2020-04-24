import { Routes } from '@angular/router';

import { MeniComponent } from '../meni/meni.component';
import { DetaljiComponent } from '../detalji/detalji.component';
import { PocetnaComponent } from '../pocetna/pocetna.component';
import { ONamaComponent } from '../o-nama/o-nama.component';
import { KontaktComponent } from '../kontakt/kontakt.component';

export const routes: Routes = [
    {path: 'pocetna', component: PocetnaComponent},
    {path: 'o-nama', component: ONamaComponent},
    {path: 'meni', component: MeniComponent},
    {path: 'detalji/:id', component: DetaljiComponent},
    {path: 'kontakt', component: KontaktComponent},
    {path: '', redirectTo: '/pocetna', pathMatch: 'full'}
];
