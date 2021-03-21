import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenericComponent } from './generic/generic.component';
import { ElementsComponent } from './elements/elements.component';
import { Theme1Component } from './theme1/theme1.component';
import { Theme2Component } from './theme2/theme2.component';
import { Theme3Component } from './theme3/theme3.component';


const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'generic',
  component:GenericComponent
},

  {
    path:'elements',
    component:ElementsComponent,
    children: [
      { path:'theme1',component: Theme1Component},
       { path:'theme2',component: Theme2Component},
        { path:'theme3',component: Theme3Component}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
