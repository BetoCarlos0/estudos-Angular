import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EMPTY, catchError, debounceTime, filter, map, of, switchMap, throwError } from 'rxjs';
import { Item, LivrosResultado } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const PAUSA = 300
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca = new FormControl()
  mensagemErro: string = ''
  livrosResultado: LivrosResultado

  constructor(private service: LivroService) { }

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    switchMap((valorDigitado) => this.service.buscar(valorDigitado)), 
    map(resultado => this.livrosResultado = resultado),
    map(resultado => resultado.items ?? []),
    map((items) => this.livrosResultadoParaLivros(items)),
    catchError(() => {
      this.mensagemErro = 'erro, carregue a aplicação'
      return EMPTY
    })
  )

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map(item => {
      return new LivroVolumeInfo(item)
    })
  }
}



