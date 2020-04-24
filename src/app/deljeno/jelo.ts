import { Komentar } from './komentar';

export class Jelo {
    id: string;
    ime: string;
    slika: string;
    kategorija: string;
    izabran: boolean;
    oznaka: string;
    cena: string;
    opis: string;
    komentari: Komentar[];
}
