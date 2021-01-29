import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwapiRoutingModule } from './swapi-routing.module';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    SwapiRoutingModule
  ]
})
export class SwapiModule { }
