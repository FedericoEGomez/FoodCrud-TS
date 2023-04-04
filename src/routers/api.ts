import express from 'express';
import apiController from '../controllers/apiController';
import validarID from '../middleware/validarID';
import validarTipo from '../middleware/validarTipo';
import checks from '../middleware/checks';
import validarCheck from '../middleware/validarCheck';
const router = express.Router();

router.get('/ver',apiController.verComidas);
router.get('/ver/:id',validarID ,apiController.verComidaPorId);
router.get('/buscar/:tipo',validarTipo ,apiController.buscarComida);
router.get('/buscador',apiController.buscador);
router.post('/crear',checks ,validarCheck ,apiController.guardarComida);
router.put('/editar/:id',checks ,validarCheck ,validarID ,apiController.editarLaComida);
router.put('/editartipo/:tipo',checks ,validarCheck ,validarTipo ,apiController.editarLaComidaPorTipo);
router.delete('/eliminar/:id',validarID, apiController.eliminarComida);
router.delete('/eliminartipo/:tipo',validarTipo ,apiController.eliminarComidaPorTipo);


export default router;