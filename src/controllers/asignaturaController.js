import Asignaturas from "../models/Asignaturas";

export const renderAsignaturas = async (req,res)=> {
    const asignaturas = await Asignaturas.find().lean();

    res.render("agregarAsignaturas", {asignaturas: asignaturas});
};

export const createAsignaturas = async (req, res)=>{
    try {
        const asignaturas = Asignaturas(req.body);
        await asignaturas.save();
        res.redirect("/agregarAsignatura");
    } catch (error) {
        console.log(error)
    }
    //const asignaturaAlmacenada = await asignaturas.save();
    //console.log(asignaturaAlmacenada);
    //res.send("Almacenó Asignatura");
};

export const renderEditAsignaturas = async (req,res)=> {
    try {
        const asignaturas = await Asignaturas.findById(req.params.id).lean();
        res.render("editarAsignaturas", {asignaturas});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateAsignaturas = async (req, res) => {
    const {id} = req.params;
    await Asignaturas.findByIdAndUpdate(id, req.body);

    res.redirect("/agregarAsignatura");
};

export const deleteAsignaturas = async (req, res) => {
    const {id} = req.params;
    await Asignaturas.findByIdAndDelete(id);

    res.redirect("/agregarAsignatura");
};

export const statusAsignaturas = async (req, res) => {
    const {id} = req.params;
    const asignaturas = await Asignaturas.findById(id);
    //la propiedad opcion esta en Model
    asignaturas.opcion = !asignaturas.opcion;
    await asignaturas.save();

    res.redirect("/agregarAsignatura");
};