import { Request, Response } from 'express'

import { Solicitante, SolicitanteService } from "./"

class SolicitanteControler {

  async cadastrar(req: Request, res: Response) {
    const solicitante: Solicitante = req.body
    await SolicitanteService.cadastrar(solicitante)
  }

  async editarCadastro(req: Request, res: Response) {
    const { id } = req.params
    const solicitante: Solicitante = req.body
    await SolicitanteService.editarCadastro(id, solicitante)
  }

  async buscarSolicitante(req: Request, res: Response) {
    const { id } = req.params
    await SolicitanteService.buscarSolicitante(id)
  }
}

export default new SolicitanteControler()