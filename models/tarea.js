const { v4: uudiv4 } = require("uuid");
// ---------------------------------------
// READ DOCUMENTATION OF THIS PACKAGE UUID
// ---------------------------------------

class Tarea {

    // id = '';
    // desc = '';
    // completadoEn = null;

    constructor( desc ){
        this.id = uudiv4(); //DA UNA CLAVE UNICA A LA TAREA
        this.desc = desc;
        this.completadoEn = null
    }

}

module.exports = Tarea;


