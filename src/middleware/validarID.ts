import { Request, Response, NextFunction } from 'express';
import Foods from '../models/foods';

const validarID = async (req: Request, res: Response, next: NextFunction) =>{
    try {
        const food = await Foods.findById(req.params.id)
        if (food !== null) {
            next()
        } else {
           res.status(400).json({msg: "el id es invalido"}) 
        }
    } catch (error) {  
        res.status(500).json(error)
    }
}

export default validarID;