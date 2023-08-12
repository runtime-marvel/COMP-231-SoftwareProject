import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { LocationsComponent } from './locations/locations.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { OrderComponent } from './order/order.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    AboutComponent,
    LandingComponent,
    HeaderComponent,
    ReservationsComponent,
    LocationsComponent,
    SecondPageComponent,
    CheckoutComponent, LoginComponent, RegisterComponent, AdvertisementComponent, OrderComponent, OrderCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
