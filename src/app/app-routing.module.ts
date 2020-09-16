import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { TestComponent } from './test/test.component';
import { WeatherViewComponent } from './weather-view/weather-view.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'list', component: ListComponent},
    {path: 'list-weather', component: WeatherListComponent },
    {path: 'test', component: TestComponent},
	{path: 'view-weather', component: WeatherViewComponent},
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
