import { Usuario, Time } from '../'

export interface Solicitante extends Usuario {
  times: Array<Time>
}