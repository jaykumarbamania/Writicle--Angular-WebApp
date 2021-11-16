import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './forms/login/login.component';
import { HomeComponent } from './home/home.component'
import { RegisterComponent } from './forms/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { FeedArticleComponent } from './know-more/feed-article/feed-article.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"feeds",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"contact",component:ContactComponent},
  {path:"about", component:AboutComponent},
  {path:"logout",component:LogoutComponent},
  {path:"feeds/:id",component:KnowMoreComponent},
  {path:"feeds/:id",component:FeedArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
