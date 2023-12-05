import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = []

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]')
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeItem: string): Item {
    const id = this.listaDeCompra.length + 1
    const item: Item = {
      id: id,
      nome: nomeItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }

    return item
  }

  public adicionarItemNaLista(nomeItem: string): void {
    this.listaDeCompra.push(this.criarItem(nomeItem));
  }

  public editarItemLista(itemAntigo: Item, nomeEditadoItem: string): void {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoItem,
      data: itemAntigo.data,
      comprado: itemAntigo.comprado
    }

    const id = itemAntigo.id
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado)
  }

  atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra))
  }
}
