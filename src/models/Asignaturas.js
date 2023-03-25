import { Schema, model } from "mongoose";

const asignaturaEsquema = new Schema(
    {
        nombre:{
            type:String,
            required: true,
            unique: true,
            trim: true,
        },
        creditos:{
            type:Number,
            required: true,
        },
        horas:{
            type:Number,
            required: true
        },
        opcion: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false

    }
);
// Se crea el modelo de datos como quiero que se llame la collection
export default model("Asignatura", asignaturaEsquema)