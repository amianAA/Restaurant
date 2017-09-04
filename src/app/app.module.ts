import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Bootstrap 4
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Apps Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishService } from './dish.service';
import { OrderService } from './order.service';
import { DishesComponent } from './dishes/dishes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { OrderComponent } from './order/order.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DishesComponent,
    DishDetailComponent,
    ContactoComponent,
    OrderComponent,
    WellcomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: WellcomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'menu',
        component: DishesComponent
      },
      {
        path: 'contact',
        component: ContactoComponent
      }
    ]),
    NgbModule.forRoot()
  ],
  providers: [DishService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
