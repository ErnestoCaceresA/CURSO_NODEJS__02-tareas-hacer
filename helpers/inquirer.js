const inquirer = require("inquirer");
require("colors");
// ------------------------------------------
//READ DOCUMENTATION OF THIS PACKAGE INQUIRER
// ------------------------------------------


// el VALUE sirve como en los inputs de html para que si el usuario selecciona esta opcion se guardara el valor del value y no del name
const preguntas = [
    {
        type: "list",
        name: "opcion",
        message: "¿Que desea hacer?",
        choices: [
            {
                value: "1",
                name: "1. Crear tarea"
            },
            {
                value: "2",
                name: "2. Listar tareas"
            },
            {
                value: "3",
                name: "3.Listar tareas completadas"
            },
            {
                value: "4",
                name: "4. Listar tareas pendientes"
            },
            {
                value: "5",
                name: "5. Completar tarea(s)"
            },
            {
                value: "6",
                name: "6. Borrar tarea"
            },
            {
                value: "0",
                name: "0. Salir"
            }
        ]
    }
];

const inquierMenu = async() => {

    console.clear();
    console.log("=====================".green);
    console.log("SELECCIONE UNA OPCION".green);
    console.log("=====================\n".green);

    const {opcion:opt} = await inquirer.prompt(preguntas);

    return opt;
}

const pausa = async() =>{

    const question = [
        {
            type: "input",
            name: "enter",
            message: `presione ${"ENTER".green} para continuar`
        }
    ];
    
    await inquirer.prompt(question) // await espera a que presione enter para continuar

}

const leerInput = async( message ) =>{
    const question = [ 
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if ( value.length === 0 ){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(question);
    return desc;
}


module.exports = {
    inquierMenu,
    pausa,
    leerInput
}