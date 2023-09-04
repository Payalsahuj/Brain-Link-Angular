import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentregisterComponent } from './studentregister/studentregister.component'; // Import the actual path for your components
import { InstructorregisterComponent } from './instructorregister/instructorregister.component'; // Import the actual path for your components

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { CoursesComponent } from './courses/courses.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';

const routes: Routes = [
  { path: '', component: DashboardComponent}, // Assuming you have a registration form at /register
  { path: 'studentregister', component: StudentregisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'assignment', component: AssignmentsComponent},
  { path: 'course', component: CoursesComponent},
  { path: 'enrollment', component: EnrollmentComponent },



  { path: 'instructorregister', component: InstructorregisterComponent },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
