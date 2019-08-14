import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutpageComponent } from './pages/layoutpage/layoutpage.component';
import { IntropageComponent } from './pages/intropage/intropage.component';
import { ComponentspageComponent } from './pages/basiccomponentspage/componentspage.component';
import { ThemespageComponent } from './pages/themespage/themespage.component';
import { EupcomponentspageComponent } from './pages/eupcomponentspage/eupcomponentspage.component';
import { DreupcomponentspageComponent } from './pages/dreupcomponentpage/dreupcomponentspage.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PlaygroundpageComponent } from './pages/playgroundpage/playgroundpage.component';

const routes = [
  { path: '', component: HomepageComponent },
  { path: 'layouts', component: LayoutpageComponent },
  { path: 'intro', component: IntropageComponent },
  { path: 'basic-components', component: ComponentspageComponent },
  { path: 'themes-arcitecture', component: ThemespageComponent },
  { path: 'eup-components', component: EupcomponentspageComponent },
  { path: 'dr-eup-components', component: DreupcomponentspageComponent  },
  { path: 'playground', component: PlaygroundpageComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
