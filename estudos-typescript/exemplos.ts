//sprech os pontos '...' informa receber mais de um parametro | observar nos métodos de string e array os ...
function funcao0(...items: any[]): any[]{
    return items
}
funcao0("teste1", "teste2")

//funções genéricas
function generico<T>(...items: T[]): T[]{
    return items;
}

let generi = generico<string[]>(["teste", "dois"])

// função pode receber string ou numero | retorno inplícito
function funcao(phone: string | number){
}

// função pode receber string ou numero | retorno explícito
function funcao2(phone: string): string{
    return phone;
}

//função assincrona
async function funcao3(id:number): Promise<number>{
    return 123;
}

// interfaces
interface IProduto {
    id: number;
    name: string;
}
// class implementa interface
class Produto implements IProduto{
    id: number;
    name: string;
}

