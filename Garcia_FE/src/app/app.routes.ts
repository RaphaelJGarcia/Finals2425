import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassRecordComponent } from './class-record/class-record.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component'; 
export const routes: Routes = [
    {
        path: '',
        component: MainComponent,  title: 'Default page'
    },
    {
        path: 'classrecord',  
        component: ClassRecordComponent, title: 'records'
    },
    {
        path: 'userprofile',  
        component: UserProfileComponent, title: 'profile'
    },
    {
        path: 'registration',  
        component: RegistrationComponent, title: 'Registration'

    },
    { 
        path: 'view/:id', 
        component: ViewComponent 
    }, 
    {
         path: 'edit/:id', 
         component: EditComponent 
    },
    { 
        path: '', 
        component: HeaderComponent 
    }, 
    { 
        path: '', 
        component: FooterComponent 
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
