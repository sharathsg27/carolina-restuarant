import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HotelsComponent} from './components/hotels/hotels.component';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'hotels', component: HotelsComponent}
];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule {}















