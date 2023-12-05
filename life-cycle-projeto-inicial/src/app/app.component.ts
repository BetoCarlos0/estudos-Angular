import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  title = 'app-lista-de-compras';
  listaDeCompras: Item[] = []
  itemParaSerEditado!: Item

  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void {
    this.listaDeCompras = this.listaService.getListaDeCompra()
  }

  ngDoCheck(): void {
      this.listaService.atualizarLocalStorage()
  }

  public editarItem(item: Item): void {
    this.itemParaSerEditado = item
  }

  public deletarItem(id: number): void {
    const index = this.listaDeCompras.findIndex((item) => item.id === id)
    this.listaDeCompras.splice(index, 1)
  }

  public limparLista(): void {
    this.listaDeCompras = []
  }
}
