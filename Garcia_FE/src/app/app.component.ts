import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive,RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ClassRecordComponent } from './class-record/class-record.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RegistrationComponent } from './registration/registration.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FooterComponent,
    HeaderComponent,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Garcia_FE';
}
