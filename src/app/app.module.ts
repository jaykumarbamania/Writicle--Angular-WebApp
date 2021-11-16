import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './forms/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './forms/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { AboutComponent } from './about/about.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { FeedsService } from './services/feeds.service';
import { FeedArticleComponent } from './know-more/feed-article/feed-article.component';
import { OrderModule } from 'ngx-order-pipe';
import { LogoutComponent } from './logout/logout.component';
import { AsideArticlesComponent } from './know-more/aside-articles/aside-articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    ContactFormComponent,
    AboutComponent,
    KnowMoreComponent,
    FeedArticleComponent,
    LogoutComponent,
    AsideArticlesComponent
  ],
  imports: [
    OrderModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [HttpClient,FeedsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
