import express, {Request, Response} from 'express';
import usuariosRoutes from'./routes/usuarios.routes';


const app = express();
const port = 3000;

app.use(express.json());

app.get('/usuarios', (req: Request, res: Response) => {
    res.status(200).json({
        ok: true,
        mensaje: "Lista de todos los usuarios",
        data: [
            { id: 1, nombre: "Santiago", email: "santi@gmail.com" },
            { id: 2, nombre: "María", email: "maria@gmail.com" }
        ]
    });
});

app.get('/usuarios/:id', (req: Request, res: Response) =>{
    const IdUsuario = req.params.id


    res.status(2000).json({
        ok: true,
        mensaje: `Usuario con id ${IdUsuario}`,
        id: IdUsuario
    });
});

app.listen(port, () =>{
    console.log(`servidor corriendo en http://localhost:${port}`);
});