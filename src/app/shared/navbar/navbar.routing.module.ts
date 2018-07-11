import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes:Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', loadChildren:'../../components/home/home.module#HomeModule'},
    { path:'country', loadChildren:'../../components/countryspanish/countryspanish.module#CountryspanishModule' },
    { path:'country/:cod', loadChildren:'../../components/countrydetail/countrydetail.module#CountrydetailModule' },
    { path: 'about', loadChildren: '../../components/about/about.module#AboutModule'}
]

@NgModule({
    imports:[RouterModule.forRoot(routes, {useHash: true})],
    exports:[RouterModule]
})

export class NavbarRoutingModule {}