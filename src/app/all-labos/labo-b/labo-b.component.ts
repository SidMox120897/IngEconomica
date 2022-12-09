import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-labo-b',
  templateUrl: './labo-b.component.html',
  styleUrls: ['./labo-b.component.css']
})
export class LaboBComponent{

  constructor() { }

  ngOnInit(): void {
  }

  @Input() capital:number=0;
  @Input() tasa:number=0;//tasa interes
  @Input() tiempo:number=0;
  @Input() unitime:string='';
  interes:number=0;//interes
  monto:number=0;//total=capital+interes
  uniTimeNumb:number=1;

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

      this.interes=this.capital*(Math.pow(1+this.tasa/100, this.tiempo/this.uniTimeNumb)-1);
      this.monto=this.interes+this.capital;
      this.single = [
        {
          "name": "Interes",
          "value": this.interes
        },
        {
          "name": "Capital",
          "value": this.capital
        }
      ];
    }
}
