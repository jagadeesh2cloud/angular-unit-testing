import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsComponent } from "./forms/forms.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";

const routes: Routes = [
  { path: "forms", component: FormsComponent },
  { path: "list", component: EmployeeListComponent },
  { path: "", redirectTo: "/forms", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
