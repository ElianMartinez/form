export class FormData {
    //Personal
    nombre: string = '';
    apellido : string = '';
    nacionalidad: string = '';
    estado_civil: string = '';
    tipo_documento: string = '';
    documento_identidad : number = null;
    no_casa:number = 0;
    lugar_nacimineto: string = '';
    fecha_nacimiento : string = '';
    calle: string = '';
    edificio: string = '';
    sector: string = '';
    ciudad: string = '';
    telefono_residencia: number = null;
    celular:number = null;
    correo:string = '';

    //Datos Familiares
     familia:Object[] = [];

     //Datos Educacion
     educacion:Object[] = [];
     per_emergencia: string;

     //Datos Comp_Tec
     com_tec: Object[] = [
           { "Competencia_tecnica" : ""}
     ];

     //Datos Idiomas
     idiomas: Object[] = [
            {
                "idioma" : "",
                "lee" : "",
                "habla" : ""
            }
     ];
     //Datos experiencia_lab

     experiencia_lab : Object[] = [
            {
                "nombre_empresa": "",
                "desde" : "",
                "hasta" : "",
                "puesto" : "",
                "nombre_supervisor": "",
                "motivo_salida" : ""
            }
     ];
     //Datos referencia_personales

     referencia_personales: Object[] = [
       { "nombre" : "",
         "telefono" : "",
         "tiempo_conoce" : "",
         "ocupacion" : ""
        }
     ];
//Datos Actividad Extraoirdinaria 
     tipo_actividad : string;
     propia : boolean;
     dias: number;
     horario : Date;
     participacion_acciones: boolean;
     ingresos_promedio_mensuales: number;

     referenciado_apap: string;









    

    



  

    clear() {
        
       
    }
}

export class Personal {
    nombre: string = '';
    apellido : string = '';
    nacionalidad: string = '';
    estado_civil: string = '';
    tipo_documento: string = '';
    documento_identidad : number = null;
    lugar_nacimineto: string = '';
    fecha_nacimiento : string = '';
    calle: string = '';
    edificio: string = '';
    sector: string = '';
    ciudad: string = '';
    telefono_residencia: number = null;
    no_casa:number = 0;
    celular:number = null;
    correo:string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}

export class Familia {
    familia:Object[] = [];
}


export class Educacion {
    per_emergencia: string;
    educacion:Object[] = [];
}
export class Com_Tec {
    com_tec: Object[] = [];
}

export class Idioma {
    idiomas: Object[] = [];
}

export class Experiencia_lab{
    experiencia_lab : Object[] = [];
}

export class Actividad_extra{
    tipo_actividad : string;
    propia : boolean;
    dias: number;
    horario : Date;
    participacion_acciones: boolean;
    ingresos_promedio_mensuales: number;

    referenciado_apap: string;
}



