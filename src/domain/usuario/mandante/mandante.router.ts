import { Router } from 'express'

import MandanteController from './mandante.controller'

const MandanteRouter = Router()

MandanteRouter
  .route('/')
  .post(MandanteController.cadastrar)

MandanteRouter
  .route('/:id')
  .get(MandanteController.buscarMandante)
  .put(MandanteController.editarCadastro)

export default MandanteRouter