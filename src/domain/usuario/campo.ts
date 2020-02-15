import { Endereco } from './endereco'
import { Disponibilidade } from './disponibilidade'

export interface Campo {
  preco: number
  observacao: string
  tipo: string
  endereco: Endereco
  aceitaDesafio: boolean
  disponibilidades: Array<Disponibilidade>
}