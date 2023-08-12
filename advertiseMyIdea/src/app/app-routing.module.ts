import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FourCornerComponent } from './component/four-corner/four-corner.component';
import { HomeComponent } from './component/home/home.component';
import { ImageconfigComponent } from './component/imageconfig/imageconfig.component';
import { PositionImageComponent } from './component/position-image/position-image.component';
import { TwosidebarComponent } from './component/twosidebar/twosidebar.component';
import { UpandRightComponent } from './component/upand-right/upand-right.component';

const routes: Routes = [{ path: '', component: HomeComponent },
  { path: 'twosidebar', component: TwosidebarComponent },
  { path: 'fourCorner', component: FourCornerComponent },
  { path: 'upandright', component: UpandRightComponent },
  { path: 'configImage', component: ImageconfigComponent },
  { path: 'positionImage', component: PositionImageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
