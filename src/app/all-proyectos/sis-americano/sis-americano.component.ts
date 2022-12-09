import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sis-americano',
  templateUrl: './sis-americano.component.html',
  styleUrls: ['./sis-americano.component.css']
})
export class SisAmericanoComponent implements OnInit {

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
  interesSum:number=0;
  //  Variables tabla
  cuotaCol:number[]=[]
  interesArr:number[]=[];
  Amortizacion:number[]=[];
  Saldo:number[]=[];

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
    this.Amortizacion=[];
    this.Saldo=[];
    this.interes=this.prestamo*this.tasa/100;
    this.cuota=this.prestamo*this.tasa/100;

    this.cuotaCol.push(0);
    this.interesArr.push(0);
    this.Amortizacion.push(0);
    this.Saldo.push(this.prestamo);

    for(let i=1;i<=this.tiempo;i++){
      if(i===this.tiempo){
        this.cuotaCol.push(this.prestamo+this.cuota);
      }else{
        this.cuotaCol.push(this.cuota)
      }
      this.interesArr.push(this.interes);
      this.Amortizacion.push(this.cuotaCol[i]-this.interesArr[i]);
      this.Saldo.push(this.Saldo[i-1]-this.Amortizacion[i]);
    }

    this.interesArr.forEach(element => {
      this.interesSum+=element;
    });

    this.single = [
      {
        "name": "Interes Total",
        "value": this.interesSum
      },
      {
        "name": "Prestamo",
        "value": this.prestamo
      }
    ];
  }

}
