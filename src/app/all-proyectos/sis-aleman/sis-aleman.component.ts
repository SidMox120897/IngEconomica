import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-aleman',
  templateUrl: './sis-aleman.component.html',
  styleUrls: ['./sis-aleman.component.css']
})
export class SisAlemanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() prestamo:number=0;
  @Input() tasa:number=0;//tasa interesArr
  @Input() tiempo:number=0;
  @Input() unitime:string='';
  uniTimeNumb:number=1;
  cuota:number=0;
  interes:number=0;
  amortizacion:number=0;
  //  Variables tabla
  cuotaCol:number[]=[]
  interesArr:number[]=[];
  AmortizacionArr:number[]=[];
  SaldoArr:number[]=[];

  //Variables Grafico
  single:any = [];

  data = [];
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme:any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }



  CargarResultados(){

    switch (this.unitime) {
      case 'aa':
        this.uniTimeNumb=1;
      break;
      case 'mm':
        this.uniTimeNumb=12;
      break;
      case 'dd':
        this.uniTimeNumb=365;
      break;
      default:
      break;
    }




    //Iniciar Tabla
    this.cuotaCol=[];
    this.interesArr=[];
    this.AmortizacionArr=[];
    this.SaldoArr=[];
    this.interes=0;
    this.amortizacion=this.prestamo/this.tiempo;

    this.cuotaCol.push(0);
    this.interesArr.push(0);
    this.AmortizacionArr.push(0);
    this.SaldoArr.push(this.prestamo);


    this.cuota=this.prestamo*(this.tasa/100)/(1-Math.pow(1+this.tasa/100, -this.tiempo/this.uniTimeNumb));

    for(let i=1;i<=this.tiempo;i++){
      this.interesArr.push(this.SaldoArr[i-1]*this.tasa/100);
      this.AmortizacionArr.push(this.amortizacion);
      this.SaldoArr.push(this.SaldoArr[i-1]-this.AmortizacionArr[i]);
      this.cuotaCol.push(this.interesArr[i]+this.AmortizacionArr[i]);
    }

    this.interesArr.forEach(element => {
      this.interes+=element;
    });

    this.single = [
      {
        "name": "Interes Total",
        "value": this.interes
      },
      {
        "name": "Prestamo",
        "value": this.prestamo
      }
    ];
  }
}
