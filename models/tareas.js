const Tarea = require('./tarea');

/* 
    _listado:
        {  "uuid-123432-1349732: { id: 12, desc:esta es la tarea, completadoEn: 1234534 }"  }
        {  "uuid-123432-1349732: { id: 12, desc:esta es la tarea, completadoEn: 1234534 }"  }
        {  "uuid-123432-1349732: { id: 12, desc:esta es la tarea, completadoEn: 1234534 }"  }
*/

class Tareas {

    // _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea( desc = '' ) {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;