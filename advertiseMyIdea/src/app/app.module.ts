import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementComponent } from './component/advertisement/advertisement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { TwosidebarComponent } from './component/twosidebar/twosidebar.component';
import { FourCornerComponent } from './component/four-corner/four-corner.component';
import { UpandRightComponent } from './component/upand-right/upand-right.component';
import { LeftanddownComponent } from './component/leftanddown/leftanddown.component';
import { ImageTextComponent } from './component/image-text/image-text.component';
import { ImageconfigComponent } from './component/imageconfig/imageconfig.component';
import { FormsModule } from '@angular/forms';
import { PositionImageComponent } from './component/position-image/position-image.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvertisementComponent,
    TwosidebarComponent,
    FourCornerComponent,
    UpandRightComponent,
    LeftanddownComponent,
    ImageTextComponent,
    ImageconfigComponent,
    PositionImageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
	RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
