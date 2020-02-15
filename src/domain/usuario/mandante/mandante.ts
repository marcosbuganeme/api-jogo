import { Usuario, Campo, Time } from '../'

export interface Mandante extends Usuario {
  campos: Array<Campo>
  times: Array<Time>
}