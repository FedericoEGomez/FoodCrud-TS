import { Request, Response } from 'express';
import Foods from '../models/foods';

class ApiController {

    async verComidas (req: Request, res: Response) {
        const foods = await Foods.find();
        console.log(foods);
        res.status(200).json({foods});
    }

    async verComidaPorId (req: Request, res: Response) {
        const food = await Foods.findById(req.params.id);
        console.log(food);
        res.status(200).json({food});
    }

    async buscarComida (req: Request, res: Response) {
        const foods = await Foods.findOne({tipo: req.params.tipo});
        console.log(foods);
        res.status(200).json({foods});
    }

    async buscador (req: Request, res: Response) {
        const foods = await Foods.find(req.query);
        console.log(foods);
        res.status(200).json({foods});
    }

    async guardarComida(req: Request, res: Response) {
        try {
            const foods = new Foods(req.body);
            await foods.save();
            console.log(foods);
            res.status(201).json({foods});
        } catch (error) {
            console.log(error);
            res.status(501).json(error);
        } 
    }

    async editarLaComida (req: Request, res: Response) {
        try {
            await Foods.findByIdAndUpdate(req.params.id,req.body);
            console.log("comida editada");
            res.status(201).json(req.body);
        } catch (error) {
            console.log(error);
            res.status(501).json(error);
        }
    }

    async editarLaComidaPorTipo (req: Request, res: Response) {
        try { 
            await Foods.findOneAndUpdate({tipo: req.params.tipo},req.body);
            console.log("comida editada");
            res.status(201).json(req.body);
        } catch (error) {
            console.log(error);
            res.status(501).json(error);
        }
    }

    async eliminarComida (req: Request, res: Response) {
        const foods = await Foods.findByIdAndDelete(req.params.id);
        console.log({msg: "adios comida", foods});
        res.status(200).json({msg: "adios comida", foods});
    }

    async eliminarComidaPorTipo (req: Request, res: Response) {
        const foods = await Foods.findOneAndDelete({tipo: req.params.tipo});
        console.log({msg: "adios comida", foods});
        res.status(200).json({msg: "adios comida", foods});
    }
}

export default new ApiController