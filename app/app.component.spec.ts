import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));

  it('calculation of median should be correct', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.median).toEqual(undefined);
      
      app.recordTemperature(1);
      app.recordTemperature(3);
      app.recordTemperature(2);
      
      app.getCurrentMedian();
      expect(app.median).toEqual(2);
      
      app.recordTemperature(5);
      app.recordTemperature(4);
      
      app.getCurrentMedian();
      expect(app.median).toEqual(3);
  });
  
  it('temperatures should be filled in the array', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.Filled_Size).toEqual(0);
      
      app.recordTemperature(1);
      app.recordTemperature(3);
      app.recordTemperature(2);
      
      let present_array_size = app.Filled_Size;
      expect(present_array_size).toEqual(3);
      
      app.recordTemperature(5);
      app.recordTemperature(4);
      
      let new_array_size = app.Filled_Size;
      expect(new_array_size).toEqual(5);
  });
  
  it('temperatures not in the -100 to 100 should be rejected', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      
      app.recordTemperature(200);
      expect(app.Filled_Size).toEqual(0);
      expect(app.median).toEqual(undefined);
  });
  
  it('no more temperature added after the array is full', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      
      for (var _i = 0; _i < app.Available_Size; _i++) {
        app.recordTemperature(_i);
      }
      
      let array_size  = app.Filled_Size;
      let median_at_max = app.getCurrentMedian();
      app.recordTemperature(-1); 
      
      expect(app.Filled_Size).toEqual(array_size);
      expect(app.median).toEqual(median_at_max);
  });
  
  it('Once the previous value is recorded the temperature variable should be set to undefined', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      
      app.recordTemperature(-1); 
      
      expect(app.Filled_Size).toEqual(1);
      expect(app.temperature).toEqual(undefined);
  });
  
});
