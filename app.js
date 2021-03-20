require("colors");

const { inquierMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

const main = async () => {

    let opt = " "
    const tareas = new Tareas();
    console.clear();

    do {

        opt = await inquierMenu(); //inquirerMenu RETORA UNA PROMESA (VER EN mensaje.js) ASI QUE CON EL AWAIT HACE QUE SE ESPERE EN ESTE CASO A QUE EL USUARIO INGRESE ALGO DE RESPUESTA
        //ANTES DE PASAR A LAS SIGUIENTES LINEAS DE CODIGO 
        // console.log({opt})

        switch (opt) {
            case '1': //crear tarea
                const desc = await leerInput("Descripcion: ");
                console.log(desc);
                tareas.crearTarea(desc)
                break;
            case '2': //mostrar listado de tareas
                console.log(tareas._listado);
                break;
        }
        

        console.log("\n");
        await pausa();
       
    } while (opt !== "0");

}

main();