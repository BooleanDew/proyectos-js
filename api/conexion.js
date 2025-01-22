import mysql from 'mysql';
var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'',
    database:'estudiantes'
});

try {
    connection.connect();
    //console.log("conexion exitosa");
} catch (error) {
    console.log("error: ",error)
}


export async function listar() {
    return await new Promise((exito, fallo)=>{
        connection.query("SELECT * FROM usuarios",(error, datos, campos)=>{
            if(error === null){
                exito(datos);
            }else if(error != null){
                fallo("no se pudo recuperar los datos.");
            }
        });
    });
}


export async function agregar(nombre, apellido, edad) {
    return await new Promise((exito, fallo)=>{
        connection.query("INSERT INTO usuarios(nombre, apellido, edad) VALUES(?,?,?)",[nombre,apellido,edad],(error, datos)=>{
            if(error){
                fallo(err)
            }else{
                exito("usuario agregado con exito.");
            }
        });
    });
}

export async function actualizar(nombre, apellido, edad,id) {
    return await new Promise((exito, fallo)=>{
        connection.query("UPDATE usuarios SET nombre=?, apellido=?, edad=? WHERE id=?",[nombre,apellido,edad,id],(error, datos)=>{
            if(error){
                fallo(err)
            }else{
                exito("usuario actualizado con exito.");
            }
        });
    });
}

export async function eliminar(id) {
    return await new Promise((exito, fallo)=>{
        connection.query("DELETE FROM usuarios WHERE id=?",[id],(error, datos)=>{
            if(error){
                fallo(err)
            }else{
                exito("usuario eliminado con exito.");
            }
        });
    });
}