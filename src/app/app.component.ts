import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './src/components/toolbar/toolbar.component';
import { FooterComponent } from './src/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ToolbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
// export class AppComponent {
//   title = 'omar-practica4';
// }
