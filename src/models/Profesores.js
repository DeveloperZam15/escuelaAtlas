import { Schema, model } from "mongoose";

const profesorEsquema = new Schema(
    {
        rfc:{
            type:String,
            required: true,
            unique: true,
            trim: true,
        },
        nombres:{
            type:String,
            required: true,
        },
        paterno:{
            type:String,
            required: true
        },
        materno:{
            type:String,
            required: true
        },
        fechaNacimiento:{
            type:Date,
            required: true
        },
        direccion:{
            type:String,
            required: true
        },
        celular:{
            type:Number,
            required: true
        },
        profesion:{
            type:String,
            required: true
        },
        numeroEmpleado:{
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
export default model("Profesor", profesorEsquema)