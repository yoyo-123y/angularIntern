import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
export const routes: Routes = [
    {path: '', component: AuthLayoutComponent,children: [
        {path: '', pathMatch: 'full', redirectTo: 'signin'},
        {path: 'signin', component: SigninComponent, title: 'Sign In'},
        {path: 'signup', component: SignupComponent, title: 'Sign Up'},
    ]},
    {path: '', component: MainLayoutComponent, children: [
        {path: '', pathMatch: 'full', redirectTo: 'home'},
        {path: 'home',component: HomeComponent, title: 'Home'},
        {path: 'categories',component: CategoriesComponent, title: 'Categories'},
        {path: 'brands',component: BrandsComponent, title: 'Brands'},
        {path: 'products',component: ProductsComponent, title: 'Products'},
    ]},
    {path: '**',component:NotFoundComponent, title: 'Not Found'}
];
// {path: '', pathMatch: 'full', redirectTo: 'home'},
// {path: 'home',component: HomeComponent, title: 'Home'},
// {path: 'categories',component: CategoriesComponent, title: 'Categories'},
// {path: 'brands',component: BrandsComponent, title: 'Brands'},
// {path: 'products',component: ProductsComponent, title: 'Products'},
