import { Component } from '@angular/core';
import { environment } from "src/environments/environment";
import { ParameterService } from "src/app/services/parameter/parameter-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hr-bot-poc-fe';

  constructor(private parameterService : ParameterService) {
    environment.apiUrl = this.parameterService.getParameterByName("apiUrl");
    console.log(environment.apiUrl);
  }
}
