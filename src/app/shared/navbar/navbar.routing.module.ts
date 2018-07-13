import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//resolver
import { RouterResolver } from './router.resolver';

const routes:Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '', loadChildren:'../../components/home/home.module#HomeModule'},
    { path:'country', loadChildren:'../../components/countryspanish/countryspanish.module#CountryspanishModule',resolve: { crisis: RouterResolver } },
    { path:'country/:cod', loadChildren:'../../components/countrydetail/countrydetail.module#CountrydetailModule',resolve: { crisis: RouterResolver } },
    { path: 'about', loadChildren: '../../components/about/about.module#AboutModule',resolve: { crisis: RouterResolver }}
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes, {useHash: true}),        
    ],
    exports:[RouterModule],
    providers:[RouterResolver]
})

export class NavbarRoutingModule {}