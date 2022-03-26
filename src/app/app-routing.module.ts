import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {MakeHoldComponent} from "./views/mahe-hold/make-hold.component";
import {MakeHoldDataComponent} from "./views/make-hold-data/make-hold-data.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'make-hold', component: MakeHoldComponent },
  { path: 'make-hold-data', component: MakeHoldDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
