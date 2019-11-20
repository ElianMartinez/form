import { Injectable }                        from '@angular/core';

import { FormData, Personal,Com_Tec, Idiomas,Experiencia_lab,Actividad_extra,Referencia_personales,Familia, Educacion}       from './formData.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isFamiliaFormValid: boolean = false;
    private isEducacionFormValid: boolean = false;
    private isCom_TecFormValid: boolean = false;
    private isIdiomasFormValid: boolean = false;
    private isExperiencia_labFormValid: boolean = false;
    private isActividad_extraFormValid: boolean = false;
    private isReferencia_personalesFormValid: boolean = false;
   
  //Get de Todos los datos

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
}

getCom_Tec(): Com_Tec {
    // Return the entire Form Data
   var com_tec: Com_Tec = {
        com_tec : this.formData.com_tec
    }
    return com_tec;
}

getExperiencia_lab(): Experiencia_lab {
    // Return the entire Form Data
   var experiencia_lab : Experiencia_lab = {
    experiencia_lab : this.formData.experiencia_lab
    }
    return experiencia_lab;
}

getReferencia_personales(): Referencia_personales {
    // Return the entire Form Data
   var referencia_personales : Referencia_personales = {
    referencia_personales : this.formData.referencia_personales
    }
    return referencia_personales;
}

getIdioma(): Idiomas {
    // Return the entire Form Data
   var idiomas : Idiomas = {
        idiomas : this.formData.idiomas
    }
    return idiomas;
}

getActividad_extra(): Actividad_extra {
    // Return the entire Form Data
   var actividad_extra : Actividad_extra = {
    tipo_actividad : this.formData.tipo_actividad,
    propia :this.formData.propia,
    dias: this.formData.dias,
    horario : this.formData.horario,
    participacion_acciones: this.formData.participacion_acciones,
    ingresos_promedio_mensuales: this.formData.ingresos_promedio_mensuales
  
    }
    return actividad_extra;
}

    getPersonal(): Personal {
        // Return the Personal data
 var personal: Personal = {
    nombre: this.formData.nombre,
    apellido : this.formData.apellido,
    nacionalidad : this.formData.nacionalidad,
    estado_civil: this.formData.estado_civil,
    tipo_documento: this.formData.tipo_documento,
    documento_identidad : this.formData.documento_identidad,
    lugar_nacimineto: this.formData.lugar_nacimineto,
    fecha_nacimiento :this.formData.fecha_nacimiento,
    calle: this.formData.calle,
    edificio: this.formData.edificio,
    sector: this.formData.sector,
    ciudad: this.formData.ciudad,
    telefono_residencia: this.formData.telefono_residencia,
    no_casa: this.formData.no_casa,
    celular:this.formData.celular,
    correo: this.formData.correo
        };
        return personal;
    }
    getEducacion() : Educacion {
        // Return the Familia type
            var educacion : Educacion = {
            per_emergencia: this.formData.per_emergencia,
            educacion : this.formData.educacion

            }
            return educacion;
    }

    getFamilia() : Familia {
        // Return the Familia type
            var familia : Familia = {
                familia : this.formData.familia

            }
            return familia;
    }
    


    //Set de todos los datos
    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.nombre = data.nombre;
        this.formData.apellido = data.apellido;
        this.formData.nacionalidad = data.nacionalidad;
        this.formData.estado_civil = data.estado_civil;
        this.formData.tipo_documento = data.tipo_documento;
        this.formData.documento_identidad = data.documento_identidad;
        this.formData.lugar_nacimineto = data.lugar_nacimineto;
        this.formData.fecha_nacimiento = data.fecha_nacimiento;
        this.formData.calle = data.calle;
        this.formData.edificio = data.edificio;
        this.formData.sector = data.sector;
        this.formData.ciudad = data.ciudad;
        this.formData.telefono_residencia = data.telefono_residencia;
        this.formData.no_casa = data.no_casa;
        this.formData.celular = data.celular;
        this.formData.correo = data.correo;

       
    }
    setEducacion(data: Educacion){
        this.isEducacionFormValid = true;
        this.formData.per_emergencia = data.per_emergencia;
        this.formData.educacion = data.educacion;
    }

    

   
    setFamilia(data: Familia) {
        // Update the work type only when the Work Form had been validated successfully
        this.isFamiliaFormValid = true;
        this.formData.familia = data.familia;
    }

    setCom_Tec(data: Com_Tec) {
        // Return the entire Form Data
             this.formData.com_tec = data.com_tec
      
    }
    
    setExperiencia_lab(data: Experiencia_lab) {
        // Return the entire Form Data
     
       this.formData.experiencia_lab = data.experiencia_lab
       
    }
    
    setReferencia_personales(data: Referencia_personales) {
        // Return the entire Form Data
      
        this.formData.referencia_personales = data.referencia_personales
       
    }
    
    setIdioma(data : Idiomas) {
        // Return the entire Form Data
        this.formData.idiomas = data.idiomas
    
    }
    
    setActividad_extra(data :  Actividad_extra ){
        // Return the entire Form Data
      
      this.formData.tipo_actividad = data.tipo_actividad;
      this.formData.propia = data.propia;
       this.formData.dias = data.dias;
      this.formData.horario = data.horario;
      this.formData.participacion_acciones = data.participacion_acciones;
      this.formData.ingresos_promedio_mensuales = data.ingresos_promedio_mensuales;
    
     
    }

   
// funciones especiales 
  

    resetFormData(): FormData {
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isFamiliaFormValid = this.isEducacionFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
                this.isFamiliaFormValid && 
                this.isEducacionFormValid;
    }
}