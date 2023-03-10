import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/shared/shared.module";
import { DateFormatPage } from "./date-format.page";

const routes: Routes = [
  {
    path: '',
    component: DateFormatPage
  }
]

@NgModule({
  declarations: [DateFormatPage],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class DateFormatPageModule { }