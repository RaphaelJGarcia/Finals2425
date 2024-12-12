import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutComponent } from './about/about.component';

import { ServicesDetailsComponent } from './services-details/services-details.component';

export const routes: Routes = [
    {
        path: '',
        component: ServicesDetailsComponent,
        outlet: 'right' 
    },  
    {
        path: '',
        component: ServicesComponent,
        outlet: 'left' 
    },
    {
        path: '',
        component: HomeComponent,  // Default landing page
    },
    {
        path: 'services',  
        component: ServicesComponent,
    },
    {
        path: 'contact',  
        component: ContactComponent,
    },
    {
        path: 'about',  
        component: AboutComponent,
    },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: UserProfileComponent },
    { path: '', redirectTo: '/register', pathMatch: 'full' }
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
