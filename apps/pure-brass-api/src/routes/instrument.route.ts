import express from 'express';
import {
  createInstrument,
  deleteInstrument,
  getAllInstruments,
  getInstrumentById,
  updateInstrument,
} from '../controllers/instrument.controller';
const router = express.Router();

router.get('/', getAllInstruments);
router.get('/:id', getInstrumentById);
router.post('/', createInstrument);
router.put('/:id', updateInstrument);
router.delete('/:id', deleteInstrument);

export default router;
