require("colors");

const {
    guardarDB,
    leerDB
} = require("./helpers/guardarArchivo");
const {
    inquierMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
} = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

const main = async () => {

    let opt = " "
    const tareas = new Tareas();

    const tareasDB = leerDB();
    if (tareasDB) { //cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

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
                tareas.listadoCompleto();
                break;
            case '3': //mostrar tareas completadas
                tareas.listarPendientesCompletadas(true);
                break;
            case '4': //mostrar tareas pendientes
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                const ids = await mostrarListadoChecklist( tareas.listadoArr );
                tareas.toggleCompletadas(ids);
                break;
            case '6': //borrar tareas
                const id = await listadoTareasBorrar(tareas.listadoArr); //para que espere esa tarea asincrona a que acabe osea hasta que el usuario ingrese una opcion
                if (id !== '0') {
                    const ok = await confirmar('¿Está seguro?'); // es asincrono porque espera una respuesta asi que poner el await
                    if (ok) {
                        tareas.borrarTarea(id);
                    }
                }
                break;
        }

        guardarDB(tareas.listadoArr); //funcion que hicimos para guardar en archivo .txt las tareas


        console.log("\n");
        await pausa(); // await porque es asincrono hay que esperar a que el usuario ingrese una opcion antes de que se ejecute este pausa()

    } while (opt !== "0");

}

main();