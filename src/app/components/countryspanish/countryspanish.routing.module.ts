import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CountryspanishComponent } from './countryspanish.component';


const routes:Routes =[
    { path:'', component: CountryspanishComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class CountrySpanishRoutingModule {}