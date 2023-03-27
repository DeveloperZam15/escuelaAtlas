import {Router} from "express";

//La de abajo se elimina porque ya no ocupamos el modelo desde models sino desde el controlador

//import Asignaturas from "../models/Asignaturas";
//import Alumnos from "../models/Alumnos";
//import Profesores from "../models/Profesores";

import { redirect } from "express/lib/response";

import { createAsignaturas, deleteAsignaturas, renderAsignaturas, renderEditAsignaturas, statusAsignaturas, updateAsignaturas } from "../controllers/asignaturaController";
import { createProfesores, deleteProfesores, renderEditProfesores, renderProfesores, statusProfesores, updateProfesores } from "../controllers/profesorController";
import { createAlumnos, deleteAlumnos, renderAlumnos, renderEditAlumnos, statusAlumnos, updateAlumnos } from "../controllers/alumnoController";

const router = Router();

router.get("/", async (req,res)=> {
    res.render("index", {});
});

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.get("/agregarAlumno/", renderAlumnos);

router.get("/agregarProfesor/", renderProfesores);

router.get("/agregarAsignatura", renderAsignaturas);

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.post("/alumnos/agregar",createAlumnos);

router.post("/profesores/agregar", createProfesores);

router.post("/asignaturas/agregar", createAsignaturas);

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.get("/updateAlumnos/:id", renderEditAlumnos);

router.get("/updateProfesores/:id", renderEditProfesores);

router.get("/updateAsignaturas/:id", renderEditAsignaturas);

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.post("/updateAlumnos/:id", updateAlumnos);

router.post("/updateProfesores/:id", updateProfesores);

router.post("/updateAsignaturas/:id", updateAsignaturas);

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.get("/deleteAlumnos/:id", deleteAlumnos);

router.get("/deleteProfesores/:id", deleteProfesores);

router.get("/deleteAsignaturas/:id", deleteAsignaturas);

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.get("/statusAlumnos/:id", statusAlumnos);

router.get("/statusProfesores/:id", statusProfesores);

router.get("/statusAsignaturas/:id", statusAsignaturas);

export default router;