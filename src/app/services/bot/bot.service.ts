import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from '../../../environments/environment';
import { Message } from '../../models/message.model';

@Injectable({
  providedIn: "root"
})
export class BotService {

  constructor(private http: HttpClient) {}

  async sendMessage(message : Message): Promise<any> {
    return await this.http.post(environment.apiUrl, { message }).toPromise();
  }
}
