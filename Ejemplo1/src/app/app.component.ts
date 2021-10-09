import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Ejemplo1';
  show:boolean=true;
  activo="";
  cursos:string[]=['HTML','ANGULAR','PHP'];
  animales:Array<any>=[
    {tipo:'Perro', nombre:'Lisa',edad:10},
    {tipo:'Gato', nombre:'Michi',edad:4},
    {tipo:'Pato', nombre:'Ducky',edad:2},
  ];

  // contador
  public n:number=0
  
  constructor(){    
  }

  ngOnInit(){
  }
  
  sumar(){
    this.n+=1;
  }

  restar(){
    this.n-=1;
  }
}
