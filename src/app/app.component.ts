/**
 * Main App Component
 * 
 * @Component decorator (selector, template)
 * @Param (title)
 */

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
//exports a databound title to the template
export class AppComponent {
  title = 'Tour of Birds';
}
