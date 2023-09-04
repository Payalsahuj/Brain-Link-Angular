import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginComponent } from './login/login.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { InstructorregisterComponent } from './instructorregister/instructorregister.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { InstructorService } from './instructor.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CoursesComponent } from './courses/courses.component';
import { DashboardService } from './dashboard.service';
import { EnrollmentComponent } from './enrollment/enrollment.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    StudentregisterComponent,
    InstructorregisterComponent,
    DashboardComponent,
    LoginComponent,
    AssignmentsComponent,
    CoursesComponent,
    EnrollmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  
  providers: [StudentService,InstructorService,DashboardService],
  bootstrap: [AppComponent]
})





export class AppModule { }
