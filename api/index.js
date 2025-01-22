import express from 'express';
import { listar, agregar, actualizar, eliminar } from './conexion.js';
const app = express();
app.use(express.json());

app.get("/listar",(req,res)=>{
    listar().then((data)=>{
        if(data){
            res.send(JSON.parse(JSON.stringify(data)));
        }else{
            res.send({"error":error});
        }
    });

});

app.post("/nuevo",(req, res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    
    agregar(nombre,apellido,edad).then((datos)=>{
        if(datos){
            res.send({"message":datos});
        }else{
            res.send({"error":datos});
        }
    });
});


app.put("/actualizar",(req,res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad = req.body.edad;
    const id = req.body.id;
    
    actualizar(nombre,apellido,edad,id).then((datos)=>{
        if(datos){
            res.send({"message":datos});
        }else{
            res.send({"error":datos});
        }
    });
});

app.delete("/eliminar",(req,res)=>{
    const id = req.body.id;
    
    eliminar(id).then((datos)=>{
        if(datos){
            res.send({"message":datos});
        }else{
            res.send({"error":datos});
        }
    });
});

app.listen(3000,()=>{
    console.log("servidor levantado, accede a el mediante este link: http://localhost:3000/");
});