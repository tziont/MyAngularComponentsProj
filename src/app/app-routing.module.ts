import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutpageComponent } from './pages/layout/layoutpage.component';
import { IntropageComponent } from './pages/intro/intropage.component';
import { ComponentspageComponent } from './pages/basiccomponents/componentspage.component';
import { ThemespageComponent } from './pages/themes/themespage.component';
import { EupcomponentspageComponent } from './pages/eupcomponents/eupcomponentspage.component';
import { PlaygroundpageComponent } from './pages/playground/playgroundpage.component';

const routes = [
  { path: 'layouts', component: LayoutpageComponent },
  { path: 'intro', component: IntropageComponent },
  { path: 'basic-components', component: ComponentspageComponent },
  { path: 'themes-arcitecture', component: ThemespageComponent },
  { path: 'eup-components', component: EupcomponentspageComponent },
  { path: 'playground', component: PlaygroundpageComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
