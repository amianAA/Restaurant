import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishService } from './dish.service';
import { DishesComponent } from './dishes/dishes.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DishesComponent,
    DishDetailComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'dishes',
        component: DishesComponent
      }
    ])
  ],
  providers: [DishService],
  bootstrap: [AppComponent]
})
export class AppModule { }
