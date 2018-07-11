import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountrydetailComponent } from './countrydetail.component';

const routes:Routes =[
    { path:'', component: CountrydetailComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CountryDetailRoutingModule {}