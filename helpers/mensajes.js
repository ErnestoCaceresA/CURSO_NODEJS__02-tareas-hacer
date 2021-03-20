// ESTA SE USO COMO DEMOSTRACION PERO ESTA MAS FRESCO HACERLO CON EL PAQUETE INQUIRER

const { resolve } = require("path");

require("colors");

const mostrarMenu = () =>{

    return new Promise( resolve =>{
        console.clear();
        console.log("=====================".green);
        console.log("SELECCIONE UNA OPCION");
        console.log("=====================\n".green);
    
        console.log(`${"1.".green} Crear una tarea`);
        console.log(`${"2.".green} Listar tareas`);
        console.log(`${"3.".green} Listar tareas completadas`);
        console.log(`${"4.".green} Listar tareas pendientes`);
        console.log(`${"5.".green} Completar tarea(s)`);
        console.log(`${"5.".green} Borrar tarea`);
        console.log(`${"0.".green} Salir`);

        //libreria que viene por defecto en node para hacer datos de entrada desde la consola "readku¡¡line"
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        // los callbacks son funciones que se lanzan cuando el proceso de la funcion en la cual esta dentro termine
        //esto es lo que nos permite con el question hacer impresiones y que enseguida se lanze el dato de entrada para que el usuario ingrese algo
        readline.question("Seleccione una opcion: ", (opt) =>{
            // console.log({opt}); //muestra la respuesta que ingreso el usuario
            readline.close();

            resolve(opt); //PROMESA
        })

    })



}

const pausa = () => {

    return new Promise(resolve =>{
        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) =>{
            readline.close();
            resolve();
        })
    })

}

module.exports = {
    mostrarMenu,
    pausa
}