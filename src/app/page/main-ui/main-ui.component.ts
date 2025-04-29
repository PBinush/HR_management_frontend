import { Component } from '@angular/core';
import { SidebarComponent } from "../../common/sidebar/sidebar.component";

@Component({
  selector: 'app-main-ui',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './main-ui.component.html',
  styleUrl: './main-ui.component.css'
})
export class MainUiComponent {

}
