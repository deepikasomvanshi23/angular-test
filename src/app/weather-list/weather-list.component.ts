import { Component, ElementRef, ViewChild } from '@angular/core';
import { City, Coordinate, TemperatureInfo, WeatherStatus } from '../shared/models/city.model';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent {

    @ViewChild('cityName')
    public cityName: ElementRef;
	City: any = {};

    // Please do not change these values.
    readonly exampleMinimumTemperature = 0;
    readonly exampleMaximumTemperature = 10;
    ////////////////////////////////////////

    exampleTemperature = 11;

    // Please do not remove any of the default sample data below.
    sampleData: City[] = [
        {
            name: 'London',
            coord: new Coordinate(0, 0),
            weather: new WeatherStatus('Heavy rain', 'Heavy rain for most of today, humid conditions'),
            main: new TemperatureInfo(22, 1, 67)
        },
        {
            name: 'Liverpool',
            coord: new Coordinate(0, 0),
            weather: new WeatherStatus('Warm but overcast', 'Overcast with hints of rain later today.'),
            main: new TemperatureInfo(16, 1, 35)
        },
        {
            name: 'Singapore',
            coord: new Coordinate(0, 0),
            weather: new WeatherStatus('Very hot', 'Hot sunny weather in Singapore'),
            main: new TemperatureInfo(31, 1, 99)
        },
    ];

    addCity(): void {
        const city = new City();
        city.name = this.cityName.nativeElement.value;
        city.coord = new Coordinate(0, 0);
        city.weather = new WeatherStatus('Test', 'Test');
        city.main = new TemperatureInfo(
            this.exampleTemperature,
            this.exampleMinimumTemperature,
            this.exampleMaximumTemperature);
		
		this.City = {name: city.name, coord: city.coord, weather:city.weather, main:city.main};  
        this.sampleData.push(this.City);  

    }

}
