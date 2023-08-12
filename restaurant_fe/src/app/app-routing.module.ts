import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { LandingComponent } from './landing/landing.component';
import { LocationsComponent } from './locations/locations.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { OrderComponent } from './order/order.component';
import { OrderCreateComponent } from './order-create/order-create.component';

const routes: Routes =
  [{ path: 'reservations', component: ReservationsComponent },
  /*
  to first be able to get to landingcomponent and have nothing show up, have to name the path as blank
  */
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'orders', component: OrderComponent },
    { path: 'order/create', component: OrderCreateComponent},
    { path: 'order/update/:id', component: OrderCreateComponent},
    { path: 'advertisement', component: AdvertisementComponent },
    { path: 'register', component: RegisterComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'checkout', component: CheckoutComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
