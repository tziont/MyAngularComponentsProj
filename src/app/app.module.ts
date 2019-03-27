import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { MatMenuModule, MatButtonModule, MatCardModule, MatSidenavModule, MatListModule } from '@angular/material';
import { SidnavdemoComponent } from './sidnavdemo/sidnavdemo.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { TestpageComponent } from './testpage/testpage.component';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenudemoComponent,
    SidnavdemoComponent,
    MainNavComponent,
    TestpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
