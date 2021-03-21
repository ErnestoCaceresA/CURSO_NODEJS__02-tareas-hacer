const fs = require("fs");

const archivo = './db/data.json';

const guardarDB = ( data ) => {

    fs.writeFileSync(archivo, JSON.stringify(data) ); //archivo es la direccion donde se va a guardar y data es lo que se va a guardar o sea las tareas
    //JSON.stringify es un metodo para convertir a texto json en este caso el arreglo que le pasamos
}

const leerDB = () => {
    if( fs.existsSync(archivo) ){ //si el archivo (con el nombre y direccion establecido arriba) existe
        return null;
    }

    const info = fs.readFileSync( archivo, {encoding: 'utf-8'});
    const data = JSON.parse( info );

    return data;
}

module.exports = {
    guardarDB,
    leerDB
}