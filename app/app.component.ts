
import { Component } from '@angular/core';
import { TemperatureMonitorService } from './TemperatureMonitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css'],
  providers: [TemperatureMonitorService]
})
export class AppComponent {
  title: string = 'app works!';
  temperature: number;
  median: number;
  Filled_Size: number = 0;
  Available_Size: number = 7;

  constructor(private temperatureMonitorService: TemperatureMonitorService) { }

  recordTemperature(temp: number): void {
    if (this.temperatureMonitorService.temperatureList.length == this.Available_Size) {
      alert('Storage size is filled ' + this.Available_Size );
    } else {
      if (temp >= -100 && temp <= 100) {
        this.temperatureMonitorService.recordTemperature(temp);
        this.Filled_Size = this.temperatureMonitorService.getFilledSize();
        this.temperature = undefined;
      } else {
        alert('Temperature should be in range of  -100 to 100 degres');
      }
    }
  }

  getCurrentMedian(): number {
    this.median = this.temperatureMonitorService.getCurrentMedian();
    return this.median;
  }
}
