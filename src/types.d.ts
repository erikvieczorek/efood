declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: []
}

declare type Dishes = {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}
