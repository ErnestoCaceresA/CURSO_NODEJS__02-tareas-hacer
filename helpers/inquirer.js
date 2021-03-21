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
                name: `${"1".green}. Crear tarea`
            },
            {
                value: "2",
                name: `${"2.".green} Listar tareas`
            },
            {
                value: "3",
                name: `${"3.".green} Listar tareas completadas`
            },
            {
                value: "4",
                name: `${"4.".green} Listar tareas pendientes`
            },
            {
                value: "5",
                name: `${"5.".green} Completar tarea(s)`
            },
            {
                value: "6",
                name: `${"6.".green} Borrar tarea`
            },
            {
                value: "0",
                name: `${"0.".green} Salir`
            }
        ]
    }
];

const inquierMenu = async() => {

    console.clear();
    console.log("=====================".green);
    console.log("SELECCIONE UNA OPCION".white);
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

const listadoTareasBorrar = async( tarea = [] ) =>{ //async para poder usar el await porque es una funcion asincrona porque SE ESPERA UNA RESPUESTA

    const choices = tarea.map( (tarea, i) => {
       
        const idx = `${i + 1}`.green;
        
        return{
            value: tarea.id,
            name: `${ idx } ${tarea.desc}`
        }
    })

    choices.unshift({ //PARA AGREGAR AL ULTIMO ES COMO UN .PUSH DE LOS ARREGLOS PERO ESTO ES DEL INQUIRER DOCUMENTACION
        value: '0',
        name: '0.'.green + ' Cancelar'
    })

    const preguntas = [
        {
            type: "list",
            name: "id",
            message: "Borrar",
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async(message) => { //async para poder usar el await porque es una funcion asincrona porque SE ESPERA UNA RESPUESTA

    const question = [
        {
            type: 'confirm', //documentacion inquirer
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

const mostrarListadoChecklist = async( tarea = [] ) =>{ //async para poder usar el await porque es una funcion asincrona porque SE ESPERA UNA RESPUESTA

    const choices = tarea.map( (tarea, i) => {
        const idx = `${i + 1}`.green;
        return{
            value: tarea.id,
            name: `${ idx } ${tarea.desc}`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    })

    const preguntas = [
        {
            type: "checkbox", //documentacion inquirer
            name: "ids",
            message: "Selecciones",
            choices
        }
    ]

    const { ids } = await inquirer.prompt(preguntas);
    return ids;
}


module.exports = {
    inquierMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}