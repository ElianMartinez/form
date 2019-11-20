import { Injectable }                        from '@angular/core';

import { FormData, Personal,Com_Tec, Idioma,Experiencia_lab,Actividad_extra,Familia, Educacion}       from './formData.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isFamiliaFormValid: boolean = false;
    private isEducacionFormValid: boolean = false;
    private isAddressFormValid: boolean = false;
  //Get de Todos los datos

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
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