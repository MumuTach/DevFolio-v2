import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'myBlog', component: MyBlogComponent},
  { path: '**', redirectTo: '' } 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
