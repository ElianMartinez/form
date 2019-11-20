import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormDataService } from '../data/formData.service';
import { Personal, Familia} from '../data/formData.model';
import { Router } from '@angular/router';
import { NacionalidadesService } from '../data/nacionalidades.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  personal: Personal;
  public familia: Familia;
    nacionalida: any;
   public nacionalidades: any[] = [];
   contadorF:number = 0;
   familia_temp = {
    "nombre" : "",
    "parentesco" : "",
    "fecha_nac" : "",
    "ocupacion" : "",
    "telefono" : "" 
  }

   step:string;
   title = 'Multi-Step Wizard';
   actPersonal:boolean = true;
   actFamiliar:boolean = false;
   actEducacion:boolean = false;
   actConTec:boolean = false;
   actIdioma:boolean = false;  
   actExpLaboral:boolean = false;
   actRefPersonal:boolean = false;
   actAtExtra:boolean = false;
  
   @Input() formData;
    
    constructor(private nacionalidadService: NacionalidadesService ,private formDataService: FormDataService, private rutaActiva: ActivatedRoute, private router: Router) {

    }

    resertStep(){
     this.actPersonal = false;
      this.actFamiliar = false;
      this.actEducacion = false;
      this.actConTec = false;
      this.actIdioma = false;  
     this.actExpLaboral = false;
      this.actRefPersonal = false;
     this.actAtExtra = false;
    }

    activarStep(num:number, form:any){
      switch (num) {
        
        case 1:
           
                this.resertStep();
                this.actPersonal = true;
                this.next(num,form);
                 break;
        case 2:
                this.resertStep();
                this.actFamiliar = true;
                this.next(num,form);
                 break;
        case 3:
               this.resertStep();
                this.actEducacion = true;
                this.next(num,form);
                 break;
        case 4:
            this.resertStep();
            this.actConTec = true;
            this.next(num,form);
             break;
        case 5:
            this.resertStep();
                this.actIdioma = true;
                this.next(num,form);
                 break;
        case 6:
            this.resertStep();
            this.actExpLaboral = true;
            this.next(num,form);
             break;
        case 7:
            this.resertStep();
            this.actRefPersonal = true;
            this.next(num,form);
             break;

        case 8:
            this.resertStep();
            this.actAtExtra = true;
            this.next(num,form);
            break;
       }

    }

   next(num:number,form: any){
    if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate([`/form/${num}`]);
     
  }
  
   }
      

   save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    console.log(this.personal);
    this.formDataService.setPersonal(this.personal);
    return true;

}
    borrarF(i : number){
      this.contadorF--;
        this.familia.familia.splice(i,1);
    }



    agregarF(){
        this.contadorF++;
      if(this.contadorF <= 6){

        this.familia.familia.push
      ({
      "nombre" : this.familia_temp.nombre, 
      "parentesco" : this.familia_temp.parentesco, 
      "fecha_nac" : this.familia_temp.fecha_nac,
      "ocupacion" : this.familia_temp.ocupacion,
      "telefono" : this.familia_temp.telefono 
    });
      }else{
        alert("No se pueden agregar más familiares");
      }

      
    }
 
    ngOnInit() {
        this.personal = this.formDataService.getPersonal();
        this.formData = this.formDataService.getFormData();
        this.familia = this.formDataService.getFamilia();
        this.step = this.rutaActiva.snapshot.params.number;

 
        this.nacionalidadService.getNacionalidad()
        .subscribe(
          (data) => { // Success
         
         
            this.nacionalida = data;

            for(let i = 0; i < this.nacionalida.length; i++ ){
              if(this.nacionalida[i].demonym == ''){

              }else{
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
