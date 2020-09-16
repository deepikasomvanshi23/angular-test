import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherService } from './shared/services/weather.service';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'  
import { TestComponent } from './test/test.component';
import {CdkTableModule} from '@angular/cdk/table';
import { WeatherViewComponent } from './weather-view/weather-view.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    WeatherListComponent,
    TestComponent,
	WeatherViewComponent
  ],
  imports: [
			BrowserModule,
			AppRoutingModule,
			HttpClientModule,
			BrowserAnimationsModule,
			ReactiveFormsModule,
			MatTableModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
