import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {PrivateUserGalleryComponent} from './private-user-gallery/private-user-gallery.component'
const routes: Routes = [
  {
    path : 'Home-Page',
    component : HomepageComponent
  },
  {
    path : 'About-Page',
    component : AboutPageComponent
  },
  {
    path : 'Gallery',
    component : PrivateUserGalleryComponent
  },
  {
    path : '',
    component : HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
