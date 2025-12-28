//============================================= Modules ========================================================

// import { Component } from '@angular/core';
// import { Routes } from '@angular/router';
// import { Home } from './home/home';
// import { Pagenotfound } from './pagenotfound/pagenotfound';

// export const routes: Routes = [
// {path:'',component:Home},
// {path:'admin',loadChildren:()=>import('./admin/admin-routing-module').then(m=>m.AdminRoutingModule)},
// {path:'user',loadChildren:()=>import('./user/user-routing-module').then(m=>m.UserRoutingModule)},
// {path:'**',component:Pagenotfound},

// ];

//============================================= Resolver  ========================================================

// import { Routes } from '@angular/router';
// import { ProductService } from './resolvers/product-service';
// export const routes: Routes = [
//   {
//     path: 'product',
//     loadComponent: () => import('./product/product').then((m) => m.Product),
//     resolve: { product: ProductService }, // attach resolver
//   },
//   { path: '', redirectTo: 'product', pathMatch: 'full' },
// ];

//============================================= Route_Guards ========================================================

// import { Routes } from '@angular/router';
// import { authGuard } from './guards/auth-guard';
// import { exitGuard } from './guards/exit-guard';
// import { User } from './user/user';
// export const routes: Routes = [
//   {
//     path: 'admin',
//     loadComponent: () =>
//     import('./admin/admin').then(m => m.Admin),
//     canActivate: [authGuard],
//   },
//   {
//     path: 'user',
//     canDeactivate: [exitGuard],
//     loadComponent: () =>
//       import('./user/user').then(m => m.User),
//   },
//   { path: '', component:User },
//   { path: '**', redirectTo: 'user' },
// ];


//=============================================  ng-template (All)  ========================================================

// import { Routes } from '@angular/router';

// export const routes: Routes = [];


//============================================= ROUTING  ========================================================

// import { Routes } from '@angular/router';
// import { About } from './about/about';
// import { Home } from './home/home';
// export const routes: Routes = [
//     {  path: '',component:Home },
//     {  path:'about',component:About },
// ];

//=============================================   ========================================================
