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
import { MatMenuModule, MatButtonModule, MatCardModule, MatSidenavModule } from '@angular/material';
import { SidnavdemoComponent } from './sidnavdemo/sidnavdemo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenudemoComponent,
    SidnavdemoComponent,
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
    MatSidenavModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
