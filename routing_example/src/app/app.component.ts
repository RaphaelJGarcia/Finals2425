import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive,RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesDetailsComponent } from './services-details/services-details.component';
import { ServicesComponent } from './services/services.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    CommonModule,
    RouterLink,
    RouterModule,
    RouterLinkActive,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    UserProfileComponent,
    AboutComponent,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing_example';
}
