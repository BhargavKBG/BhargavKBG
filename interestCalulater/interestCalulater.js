import { LightningElement } from 'lwc';

export default class InterestCalulater extends LightningElement {
   
    EnterAmount1 ;
    EnternoYears1;
    Enterrateofinterest1;
    InterestValue;
    MaturityValue;
    Profit;
    Profitcondition = false;
    clearhandler(event){
    this.EnterAmount1 = '' ;
    this.EnternoYears1 = '';
    this.Enterrateofinterest1='';
    this.InterestValue='';
    this.MaturityValue='';
   this.Profitcondition=false;

    }
    calculatehandler(event){
        const a = parseInt( this.EnterAmount1);
        const b= parseInt( this.EnternoYears1);
        const c = parseInt( this.Enterrateofinterest1);
        
this.InterestValue = a*b*(c/100);
this.MaturityValue = a*b*(c/100)+a;

this.Profit = a*b*(c/100)/a * 100;
this.Profitcondition = true;
    }

    Amounthandler(event){

        const wh = event.target.name ;

        if( wh == 'EnterAmount'){
            this.EnterAmount1 = event.target.value ;
        }
        else if( wh == 'EnternoYears'){
            this.EnternoYears1 = event.target.value ;
        }
        else {
             this.Enterrateofinterest1 = event.target.value ;
        }
    }

}