import { Schema, model } from "mongoose";

const alumnoEsquema = new Schema(
    {
        nombre:{
            type:String,
            required: true,
            unique: true,
            trim: true,
        },
        paterno:{
            type:String,
            required: true,
        },
        materno:{
            type:String,
            required: true
        },
        fechaNacimiento:{
            type:Date,
            required: true,
        },
        sexo:{
            type:String,
            required: true
        },
        celular:{
            type:Number,
            required: true
        },
        direccion:{
            type:String,
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
export default model("Alumno", alumnoEsquema)