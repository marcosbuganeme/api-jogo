import { Request, Response } from 'express'

import { Mandante, MandanteService } from './'

class MandanteController {
  async cadastrar(req: Request, res: Response) {
    const mandante: Mandante = req.body
    await MandanteService.cadastrar(mandante)
  }

  async editarCadastro(req: Request, res: Response) {
    const { id } = req.params
    const mandante: Mandante = req.body
    await MandanteService.editarCadastro(id, mandante)
  }

  async buscarMandante(req: Request, res: Response) {
    const { id } = req.params
    await MandanteService.buscarPorId(id)
  }
}

export default new MandanteController()