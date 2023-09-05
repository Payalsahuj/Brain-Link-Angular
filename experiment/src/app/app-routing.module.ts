import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentregisterComponent } from './studentregister/studentregister.component'; // Import the actual path for your components
import { InstructorregisterComponent } from './instructorregister/instructorregister.component'; // Import the actual path for your components

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { CoursesComponent } from './courses/courses.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { StudashboardComponent } from './studashboard/studashboard.component';
import { StucoursesComponent } from './stucourses/stucourses.component';
import { AnnouncementComponent } from './announcement/announcement.component';
import { StuassignmentComponent } from './stuassignment/stuassignment.component';
import { AssignsubmissionComponent } from './assignsubmission/assignsubmission.component';

const routes: Routes = [
  { path: '', component: DashboardComponent}, // Assuming you have a registration form at /register
  { path: 'studentregister', component: StudentregisterComponent },
  { path: 'login', component: LoginComponent},
  { path: 'studentcourse', component: StucoursesComponent},
  { path: 'course', component: CoursesComponent},
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'announcement', component: AnnouncementComponent },
  { path: 'studentassignment', component: StuassignmentComponent },
  { path: 'studentassignment/:id', component: AssignsubmissionComponent },
  { path: 'studentdashboard', component: StudashboardComponent },
  { path: 'instructorregister', component: InstructorregisterComponent },
  // ... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
