import { Router } from 'express'

import SolicitanteController from './solicitante.controller'

const SolicitanteRouter = Router()

SolicitanteRouter
  .route('/')
  .post(SolicitanteController.cadastrar)

SolicitanteRouter
  .route('/:id')
  .put(SolicitanteController.editarCadastro)
  .get(SolicitanteController.buscarSolicitante)

export default SolicitanteRouter