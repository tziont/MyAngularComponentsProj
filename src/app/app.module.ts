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
import { MatMenuModule, MatButtonModule, MatCardModule, MatSidenavModule, MatListModule, MatGridListModule } from '@angular/material';
import { SidnavdemoComponent } from './sidnavdemo/sidnavdemo.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { IntropageComponent } from './pages/intro/intropage.component';
import { LayoutpageComponent } from './pages/layout/layoutpage.component';
import { ComponentspageComponent } from './pages/basiccomponents/componentspage.component';
import { ThemespageComponent } from './pages/themes/themespage.component';
import { EupcomponentspageComponent } from './pages/eupcomponents/eupcomponentspage.component';
import { PlaygroundpageComponent } from './pages/playground/playgroundpage.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenudemoComponent,
    SidnavdemoComponent,
    MainNavComponent,
    LayoutpageComponent,
    IntropageComponent,
    ComponentspageComponent,
    ThemespageComponent,
    EupcomponentspageComponent,
    PlaygroundpageComponent
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
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    AppRoutingModule,
    FlexLayoutModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
