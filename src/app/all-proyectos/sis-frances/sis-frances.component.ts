import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sis-frances',
  templateUrl: './sis-frances.component.html',
  styleUrls: ['./sis-frances.component.css']
})
export class SisFrancesComponent{

  ngOnInit(): void {
  }
  constructor() {
  //    Object.assign(this, { single });
    }

  @Input() prestamo:number=0;
  @Input() tasa:number=0;//tasa interesArr
  @Input() tiempo:number=0;
  @Input() unitime:string='';
  uniTimeNumb:number=1;
  cuota:number=0;
  interes:number=0;
  //  Variables tabla
  cuotaCol:number[]=[]
  interesArr:number[]=[];
  Amortizacion:number[]=[];
  saldoInsoluto:number[]=[];
  deudaExtinguida:number[]=[];

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
    this.saldoInsoluto=[];
    this.deudaExtinguida=[];
    this.interes=0;

    this.cuotaCol.push(0);
    this.interesArr.push(0);
    this.Amortizacion.push(0);
    this.saldoInsoluto.push(this.prestamo);
    this.deudaExtinguida.push(0);


    this.cuota=this.prestamo*(this.tasa/100)/(1-Math.pow(1+this.tasa/100, -this.tiempo/this.uniTimeNumb));

    for(let i=1;i<=this.tiempo;i++){
      this.cuotaCol.push(this.cuota);
      this.interesArr.push(this.saldoInsoluto[i-1]*this.tasa/100);
      this.Amortizacion.push(this.cuotaCol[i]-this.interesArr[i]);
      this.saldoInsoluto.push(this.saldoInsoluto[i-1]-this.Amortizacion[i]);
      this.deudaExtinguida.push(this.deudaExtinguida[i-1]-this.Amortizacion[i]);
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
