import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormDataService } from '../data/formData.service';
import { Personal, Familia, Educacion, Com_Tec, Idiomas, Experiencia_lab, Actividad_extra, Referencia_personales } from '../data/formData.model';
import { Router } from '@angular/router';
import { NacionalidadesService } from '../data/nacionalidades.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //datos Estraidos
  personal: Personal;
  familia: Familia;
  educacion: Educacion;
  com_tec: Com_Tec;
  idiomas: Idiomas;
  experiencia_lab: Experiencia_lab;
  referencia_personales: Referencia_personales;
  actividad_extra: Actividad_extra;

  // datos se api
  nacionalida: any;
  public nacionalidades: any[] = [];

  //datos de var temp contadoras
  contadorF: number = 0;
  contadorE: number = 0;
  contadorC: number = 0;
  contadorI: number = 0;
  contadorEL: number = 0;
  contadorR: number = 0;

  //fariables temporales boolean
  e: boolean = false;
  f: boolean = false;
  c: boolean = false;
  i: boolean = false;
  el: boolean = false;
  r: boolean = false;
  // datos de var temp Educaciom
  familia_temp = {
    "nombre": "",
    "parentesco": "",
    "fecha_nac": "",
    "ocupacion": "",
    "telefono": ""
  }
  educacion_temp = {
    "estudiante": "",
    "centro_docente": "",
    "fecha_inicio": "",
    "fecha_final": "",
    "grado_obtenido": "",
    "actual": ""
  }

  com_tec_temp = {
    "competencia": "",

  }

  idiomas_temp = {
    "idioma": "",
    "lee": "",
    "habla": "",
    "escribe": ""
  }
  experiencia_lab_temp = {
    "nombre_empresa": "",
    "desde": "",
    "hasta": "",
    "puesto": "",
    "nombre_supervisor": "",
    "motivo_salida": ""
  }

  referencia_personales_temp = {

    "nombre": "",
    "telefono": "",
    "tiempo_conoce": "",
    "ocupacion": ""

  }


  step: string;
  actPersonal: boolean = true;
  actFamiliar: boolean = false;
  actEducacion: boolean = false;
  actConTec: boolean = false;
  actIdioma: boolean = false;
  actExpLaboral: boolean = false;
  actRefPersonal: boolean = false;
  actAtExtra: boolean = false;

  @Input() formData;

  constructor(private nacionalidadService: NacionalidadesService, private formDataService: FormDataService, private rutaActiva: ActivatedRoute, private router: Router) {

  }

  resertStep() {
    this.actPersonal = false;
    this.actFamiliar = false;
    this.actEducacion = false;
    this.actConTec = false;
    this.actIdioma = false;
    this.actExpLaboral = false;
    this.actRefPersonal = false;
    this.actAtExtra = false;
  }

  activarStep(num: number, form: any) {
    switch (num) {

      case 1:

        this.resertStep();
        this.actPersonal = true;
        this.next(num, form);
        break;
      case 2:
        this.resertStep();
        this.actFamiliar = true;
        this.next(num, form);
        break;
      case 3:
        this.resertStep();
        this.actEducacion = true;
        this.next(num, form);
        break;
      case 4:
        this.resertStep();
        this.actConTec = true;
        this.next(num, form);
        break;
      case 5:
        this.resertStep();
        this.actIdioma = true;
        this.next(num, form);
        break;
      case 6:
        this.resertStep();
        this.actExpLaboral = true;
        this.next(num, form);
        break;
      case 7:
        this.resertStep();
        this.actRefPersonal = true;
        this.next(num, form);
        break;

      case 8:
        this.resertStep();
        this.actAtExtra = true;
        this.next(num, form);
        break;
    }

  }



  next(num: number, form: any) {

    if (this.save(form, num)) {
      // Navigate to the work page
      this.router.navigate([`/form/${num}`]);
    }


  }


  save(form: any, num: number): boolean {

    if (num == 1) {
      if (!form.valid) {
        return false;
      }
      console.log(this.personal);
      this.formDataService.setPersonal(this.personal);
      return true;
    }
    if (num == 2) {
      if (!form.valid) {
        return false;
      }
      console.log(this.familia);
      this.formDataService.setFamilia(this.familia);
      return true;
    }
    if (num == 3) {
      if (!form.valid) {
        return false;
      }
      console.log(this.educacion);
      this.formDataService.setEducacion(this.educacion);
      return true;
    }
    if (num == 4) {
      if (!form.valid) {
        return false;
      }
      console.log(this.com_tec);
      this.formDataService.setCom_Tec(this.com_tec);
      return true;
    }


    if (num == 5) {
      if (!form.valid) {
        return false;
      }
      console.log(this.com_tec);
      this.formDataService.setIdioma(this.idiomas);
      return true;

    }
    if (num == 6) {
      if (!form.valid) {
        return false;
      }
      console.log(this.experiencia_lab);
      this.formDataService.setExperiencia_lab(this.experiencia_lab);
      return true;

    }
    if (num == 7) {
      if (!form.valid) {
        return false;
      }
      console.log(this.referencia_personales);
      this.formDataService.setReferencia_personales(this.referencia_personales);
      return true;
    }
    if (num == 8) {
      if (!form.valid) {
        return false;
      }
      console.log(this.actividad_extra);
      this.formDataService.setActividad_extra(this.actividad_extra);
      return true;
    }

  }

  //funciones de borrar
  borrarF(i: number) {
    this.contadorF--;
    this.familia.familia.splice(i, 1);
    if (this.contadorF <= 0) {
      this.f = false;
    }
  }
  borrarE(i: number) {
    this.contadorE--;
    this.educacion.educacion.splice(i, 1);
    if (this.contadorE <= 0) {
      this.f = false;
    }
  }
  borrarC(i: number) {
    this.contadorC--;
    this.com_tec.com_tec.splice(i, 1);
    if (this.contadorC <= 0) {
      this.c = false;
    }
  }
  borrarI(i: number) {
    this.contadorI--;
    this.idiomas.idiomas.splice(i, 1);
    if (this.contadorI <= 0) {
      this.i = false;
    }
  }

  borrarEL(i: number) {
    this.contadorEL--;
    this.experiencia_lab.experiencia_lab.splice(i, 1);
    if (this.contadorEL <= 0) {
      this.el = false;
    }
  }

  borrarR(i: number) {
    this.contadorR--;
    this.referencia_personales.referencia_personales.splice(i, 1);
    if (this.contadorR <= 0) {
      this.r = false;
    }
  }


  // funciones de Agregar
  agregarF() {
    this.contadorF++;
    if (this.contadorF <= 6) {
      this.f = true;
      this.familia.familia.push
        ({
          "nombre": this.familia_temp.nombre,
          "parentesco": this.familia_temp.parentesco,
          "fecha_nac": this.familia_temp.fecha_nac,
          "ocupacion": this.familia_temp.ocupacion,
          "telefono": this.familia_temp.telefono
        });
      this.familia_temp.nombre = "";
      this.familia_temp.parentesco = "";
      this.familia_temp.ocupacion = "";
      this.familia_temp.fecha_nac = "";
      this.familia_temp.telefono = "";
    } else {
      alert("No se pueden agregar más familiares");
    }

  }

  agregarE() {
    this.contadorE++;
    if (this.contadorE <= 6) {
      this.e = true;
      this.educacion.educacion.push
        ({
          "estudiante": this.educacion_temp.estudiante,
          "centro_docente": this.educacion_temp.centro_docente,
          "fecha_inicio": this.educacion_temp.fecha_inicio,
          "fecha_fin": this.educacion_temp.fecha_final,
          "grado_obtenido": this.educacion_temp.grado_obtenido,
          "actual": this.educacion_temp.actual
        });
      this.educacion_temp.estudiante = "";
      this.educacion_temp.centro_docente = "";
      this.educacion_temp.fecha_inicio = "";
      this.educacion_temp.fecha_final = "";
      this.educacion_temp.grado_obtenido = "";
    } else {
      alert("No se pueden agregar más Educacion");
    }

  }

  agregarC() {
    this.contadorC++;
    if (this.contadorC <= 6) {
      this.c = true;
      this.com_tec.com_tec.push
        ({
          "competencia": this.com_tec_temp.competencia

        });
      this.com_tec_temp.competencia = "";

    } else {
      alert("No se pueden agregar más Educacion");
    }

  }

  agregarI() {
    this.contadorI++;
    if (this.contadorI <= 6) {
      this.i = true;

      this.idiomas.idiomas.push
        ({
          "idioma": this.idiomas_temp.idioma,
          "lee": this.idiomas_temp.lee,
          "habla": this.idiomas_temp.habla,
          "escribe": this.idiomas_temp.escribe

        });
      this.idiomas_temp.lee = "";
      this.idiomas_temp.habla = "";
      this.idiomas_temp.idioma = "";

    } else {
      alert("No se pueden agregar más Idiomas");
    }

  }

  agregarEL() {
    this.contadorEL++;
    if (this.contadorEL <= 3) {
      this.i = true;
      this.experiencia_lab.experiencia_lab.push
        ({
          "nombre_empresa": this.experiencia_lab_temp.nombre_empresa,
          "desde": this.experiencia_lab_temp.desde,
          "hasta": this.experiencia_lab_temp.hasta,
          "puesto": this.experiencia_lab_temp.puesto,
          "nombre_supervisor": this.experiencia_lab_temp.nombre_supervisor,
          "motivo_salida": this.experiencia_lab_temp.motivo_salida

        });
      this.experiencia_lab_temp.nombre_empresa = "";
      this.experiencia_lab_temp.desde = "";
      this.experiencia_lab_temp.hasta = "";
      this.experiencia_lab_temp.motivo_salida = "";
      this.experiencia_lab_temp.nombre_supervisor = "";
      this.experiencia_lab_temp.puesto = "";
    } else {
      alert("No se pueden agregar más experiencia_lab");
    }

  }

  agregarR() {
    this.contadorR++;
    if (this.contadorR <= 3) {
      this.i = true;
      this.referencia_personales.referencia_personales.push
        ({
          "nombre": this.referencia_personales_temp.nombre,
          "telefono": this.referencia_personales_temp.telefono,
          "tiempo_conoce": this.referencia_personales_temp.tiempo_conoce,
          "ocupacion": this.referencia_personales_temp.ocupacion

        });
      this.referencia_personales_temp.nombre = "";
      this.referencia_personales_temp.telefono = "";
      this.referencia_personales_temp.tiempo_conoce = "";
      this.referencia_personales_temp.ocupacion = "";
    } else {
      alert("No se pueden agregar más referencia personales");
    }

  }





  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
    this.formData = this.formDataService.getFormData();
    this.familia = this.formDataService.getFamilia();
    this.com_tec = this.formDataService.getCom_Tec();
    this.idiomas = this.formDataService.getIdioma();
    this.experiencia_lab = this.formDataService.getExperiencia_lab();
    this.referencia_personales = this.formDataService.getReferencia_personales();
    this.actividad_extra = this.formDataService.getActividad_extra();
    this.step = this.rutaActiva.snapshot.params.number;


    this.nacionalidadService.getNacionalidad()
      .subscribe(
        (data) => { // Success


          this.nacionalida = data;

          for (let i = 0; i < this.nacionalida.length; i++) {
            if (this.nacionalida[i].demonym == '') {

            } else {
              this.nacionalidades.push(this.nacionalida[i].demonym);
            }

          }





          console.log(this.familia_temp);

        },
        (error) => {
          console.error(error);
        }

      );



  }

}
