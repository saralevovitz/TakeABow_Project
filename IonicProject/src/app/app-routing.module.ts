import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'new-feedback',
    loadChildren: () => import('./pages/new-feedback/new-feedback.module').then( m => m.NewFeedbackPageModule)
  },
  {
    path: 'my-feedbacks',
    loadChildren: () => import('./pages/my-feedbacks/my-feedbacks.module').then( m => m.MyFeedbacksPageModule)
  },
  {
    path: 'my-details',
    loadChildren: () => import('./pages/my-details/my-details.module').then( m => m.MyDetailsPageModule)
  },
  {
    path: 'my-invitations',
    loadChildren: () => import('./pages/my-invitations/my-invitations.module').then( m => m.MyInvitationsPageModule)
  },
  {
    path: 'top-feedbacks',
    loadChildren: () => import('./pages/top-feedbacks/top-feedbacks.module').then( m => m.TopFeedbacksPageModule)
  },
  {
    path: 'view-requests',
    loadChildren: () => import('./pages/view-requests/view-requests.module').then( m => m.ViewRequestsPageModule)
  },
  {
    path: 'list-feedback',
    loadChildren: () => import('./pages/list-feedback/list-feedback.module').then( m => m.ListFeedbackPageModule)
  },
  {
    path: 'all-users',
    loadChildren: () => import('./pages/all-users/all-users.module').then( m => m.AllUsersPageModule)
  },
 
  {
    path: 'view-feedbacks',
    loadChildren: () => import('./pages/view-feedbacks/view-feedbacks.module').then( m => m.ViewFeedbacksPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
