import { Component, ElementRef, ViewChild } from '@angular/core';
import { City, Coordinate, TemperatureInfo, WeatherStatus } from '../shared/models/city.model';
import { WeatherService } from './../shared/services/weather.service';

@Component({
  selector: 'app-weather-view',
  templateUrl: './weather-view.component.html',
  styleUrls: ['./weather-view.component.css']
})
export class WeatherViewComponent {
	
	currentWeather: any = <any>{};
	error: any = <any>{};
	constructor(private weatherService: WeatherService) { }

    @ViewChild('cityName')
    public cityName: ElementRef;
	City: any = {};    
    getCityWeather(): void {
		this.currentWeather = {};
		this.error ={};
        const city = new City();
        city.name = this.cityName.nativeElement.value;   
		this.City = {name: city.name};  
		this.weatherService.getCityWeather(this.cityName.nativeElement.value).subscribe(res => {this.currentWeather = res;}, 
		err => {this.error = err});        
    }
	
	resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }
  
  public inputValidator(event: any) {
    const pattern = /^[a-zA-Z,]*$/;   
    if (!pattern.test(event.target.value)) {
      event.target.value = event.target.value.replace(/[^a-zA-Z,]/g, "");
    }
  }
}
