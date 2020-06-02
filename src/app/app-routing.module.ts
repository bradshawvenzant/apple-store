import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IphoneComponent } from './iphone/iphone.component';
import { LoginComponent } from './login/login.component';
import { MacbookComponent } from './macbook/macbook.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ProductResolver } from './shared/resolvers/product-resolver';
import { SignUpComponent } from './sign-up/sign-up.component';
import { WatchComponent } from './watch/watch.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { animation: 'signIn' }
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    data: { animation: 'signUp' }
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'products',
    resolve: {
      shippingDate: ProductResolver
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'iphone',
        pathMatch: 'full'
      },
      {
        path: 'iphone',
        component: IphoneComponent,
        data: { animation: 'iphone' }
      },
      {
        path: 'macbook',
        component: MacbookComponent,
        data: { animation: 'macbook' }
      },
      {
        path: 'watch',
        component: WatchComponent,
        data: { animation: 'watch' }
      }
    ]
  },
  {
    path: 'error',
    component: NotFoundComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
