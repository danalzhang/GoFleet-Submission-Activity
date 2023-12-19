import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeadingComponent } from './components/heading/heading.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SelectFormComponent } from './components/select-form/select-form.component';
import { ToggleMapListComponent } from './components/toggle-map-list/toggle-map-list.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadingComponent,
    SearchBarComponent,
    SelectFormComponent,
    ToggleMapListComponent,
    TasksComponent,
    TaskItemComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatSortModule,
    FormsModule,
    MatButtonToggleModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
