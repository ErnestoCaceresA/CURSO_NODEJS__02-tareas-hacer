const Tarea = require('./tarea');

/* 
    _listado:
        {  "uuid-123432-1349732: { id: 12, desc:esta es la tarea, completadoEn: 1234534 }"  }
        {  "uuid-123432-1349732: { id: 12, desc:esta es la tarea, completadoEn: 1234534 }"  }
        {  "uuid-123432-1349732: { id: 12, desc:esta es la tarea, completadoEn: 1234534 }"  }
*/

class Tareas {

    // _listado = {};

    get listadoArr(){
        const listado = []; //areglo a retornar

        //rellenar el arreglo "listado" con el objeto que ya tenemos de las tareas "_listado"
        Object.keys(this._listado).forEach( key =>{
            // console.log(key)
            const tarea = this._listado[key]
            listado.push(tarea)
        } )

        return listado
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea( id = ''){
        if( this._listado[id] ){
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = [] ){

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        } );

    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto(){

        console.log("\n");
        this.listadoArr.forEach( (tarea, i) => {

            const idx = `${i + 1}`.green;
            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
            ? 'Completada'.green 
            : 'Pendiente'.red;

            console.log(`${idx} ${desc} :: ${estado}`)
        })
    }

    listarPendientesCompletadas( completadas = true ){
        //se imprime una u otra dependiendo el argumento completadas si lo manda como true o false al llamar la funcion
        console.log("\n");
        let contador = 0;

        this.listadoArr.forEach( (tarea) => {

            const { desc, completadoEn } = tarea;
            const estado = ( completadoEn ) 
            ? 'Completada'.green 
            : 'Pendiente'.red;

            if( completadas ){
                if(completadoEn){
                    contador += 1;
                    console.log(`${contador.toString().green}. ${desc} :: ${estado}  :: ${completadoEn.green}`)
                }
            }else{
                if( !completadoEn ){
                    contador += 1;
                    console.log(`${contador.toString().green}. ${desc} :: ${estado}`)
                }
            }


        })

    }

    toggleCompletadas( ids = [] ){
        ids.forEach(id =>{
            const tarea = this._listado[id];
            if ( !tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach( tarea => {

            if( !ids.includes(tarea.id) ){ //si no viene incluido en el arreglo de ids = [] significa que ya esta completada esa tarea pero si la deselecciona hay que descompletarla
                this._listado[tarea.id].completadoEn = null; //se descompleta si ya estaba completada
            }

        })
    }
}

module.exports = Tareas;