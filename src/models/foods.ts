import {Schema, model} from 'mongoose';

const comida = new Schema({
    nombre: {
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
})

const Foods = model('Food',comida);
export default Foods;