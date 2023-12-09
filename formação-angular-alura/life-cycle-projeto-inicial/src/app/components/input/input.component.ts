import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemSerEditado!: Item
  editando: boolean = false
  textoBtn: string = "Salvar item"
  valorItem!: string

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['itemSerEditado'].firstChange) {
      this.editando = true
      this.textoBtn = "Editar item"
      this.valorItem = this.itemSerEditado?.nome
    }
   }

  public adicionarItem(): void{
    this.listaService.adicionarItemNaLista(this.valorItem);
    this.limparCampo()
  }

  editarItem(): void {
    this.listaService.editarItemLista(this.itemSerEditado, this.valorItem)
    this.limparCampo()
    this.editando = false,
    this.textoBtn = "Salvar item"
  }

  private limparCampo(): void {
    this.valorItem = ''
    const input = document.querySelector('#item') as HTMLElement
    input.focus()
  }
}
