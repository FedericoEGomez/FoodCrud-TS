import { Request, Response, NextFunction } from 'express';
import Foods from '../models/foods';

const validarTipo = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const food = await Foods.findOne({tipo: req.params.tipo});
        if (food !== null) {
            next()
        } else {
           res.status(400).json({msg: "el tipo es invalido"}) 
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export default validarTipo 