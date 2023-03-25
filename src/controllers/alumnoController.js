import Alumnos from "../models/Alumnos";

export const renderAlumnos = async (req,res)=> {
    const alumnos = await Alumnos.find().lean();

    res.render("agregarAlumnos", {alumnos: alumnos});
};

export const createAlumnos =  async (req, res)=>{
    try {
        const alumnos = Alumnos(req.body);
        await alumnos.save();
        res.redirect("/agregarAlumno");
    } catch (error) {
        console.log(error);
    }
    //const alumnoAlmacenado = await alumnos.save();
    //console.log(alumnoAlmacenado);
    //res.send("Almacenó Alumno!");
};

export const renderEditAlumnos = async (req,res)=> {
    try {
        const alumnos = await Alumnos.findById(req.params.id).lean();
        res.render("editarAlumnos", {alumnos});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateAlumnos = async (req, res) => {
    const {id} = req.params;
    await Alumnos.findByIdAndUpdate(id, req.body);

    res.redirect("/agregarAlumno");
};

export const deleteAlumnos = async (req, res) => {
    const {id} = req.params;
    await Alumnos.findByIdAndDelete(id);

    res.redirect("/agregarAlumno");
};

export const statusAlumnos = async (req, res) => {
    const {id} = req.params;
    const alumnos = await Alumnos.findById(id);
    //la propiedad opcion esta en Model
    alumnos.opcion = !alumnos.opcion;
    await alumnos.save();

    res.redirect("/agregarAlumno");
};