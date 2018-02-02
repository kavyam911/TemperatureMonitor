import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class TemperatureMonitorService {
  temperatureList : number[] = [];
  median : number = undefined;
  
  recordTemperature (addedTemperature : number) : void {
        this.temperatureList.push(addedTemperature);
  }
  
  getCurrentMedian() : number {
    this.temperatureList.sort( function(a,b) {return a-b;});
    
    let length = this.temperatureList.length;
    let middle = Math.floor(length/2);  
    
    if (length % 2 == 1){
      this.median = this.temperatureList[middle];
    }else{
      this.median = (Number(this.temperatureList[middle]) + Number(this.temperatureList[(middle) - 1])) / 2;
    }
    
    return this.median;
    
  }
  
  getFilledSize(): number {
    return this.temperatureList.length;
  }
}