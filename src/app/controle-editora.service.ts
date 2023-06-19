import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  editoras: Editora[];

  constructor() {
    this.editoras = [
      {
        codEditora: 1,
        nome: "Editora do Brasil S/A",
      },
      {
        codEditora: 2,
        nome: "Editora Sextante",
      },
      {
        codEditora: 3,
        nome: "Martins Fontes",
      },
    ];
   }
   public getEditoras():Editora[]{
    return this.editoras;
  }


  public getNomeEditora(codBusca:number): string {
    const busca = this.editoras.filter(editora => editora.codEditora === codBusca);
    return busca.length > 0 ? busca[0].nome: "not found";
  }
}
