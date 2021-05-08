import Instrument from '../models/Instrument';
import { Request, Response } from 'express';
import User from '../models/User';

export const getAllInstruments = async (req: Request, res: Response) => {
  return res.json({ msg: 'bitch' });
};

export const getInstrumentById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const instrument = await Instrument.findOne(id);
  return res.json(instrument);
};

export const createInstrument = async (req: Request, res: Response) => {
  const instrument = Instrument.create(req.body as Instrument);
  await Instrument.save(instrument);

  return res.json(instrument);
};

export const updateInstrument = async (req: Request, res: Response) => {};

export const deleteInstrument = async (req: Request, res: Response) => {};
