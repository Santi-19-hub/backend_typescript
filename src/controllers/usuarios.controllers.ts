import { Request, Response } from 'express'

let usuarios =[
    {id: 1, nombre : "Santaigo", email: "santiago@gmail.com"},
    {id: 2, nombre : "Maria", email: "maria@gmail.com"}
];

export const obtenerUsuarios = (req:  Request, res: Response)=>{
    res.status(200).json({
        ok: true,
        data: usuarios
    });
};

export const crearUsuario = (req: Request, res: Response)=>{
    const {nombre, email} = req.body;

    const nuevoUsuario = {
        id: usuarios.length + 1,
        nombre,
        email
    };

    Usuarios.push(nuevoUsuario);

    res.status()
}


export const obtenerUsuarioporId = (req: Request, res: Response)=>{
    const id = Number(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if(!usuario){
        res.status(404).json({
            ok:false,
            mensaje: "Usuario no encontrado"
        });
        
        return;
    }

    res.status(200).json({
        ok: true,
        data: usuario
    });
};    