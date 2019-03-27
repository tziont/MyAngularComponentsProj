import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestpageComponent } from './testpage/testpage.component';

const routes = [
  { path: 'testpage', component: TestpageComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }
