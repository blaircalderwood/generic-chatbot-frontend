import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ParameterService {
  constructor() {}

  getParameterByName(name: string, url?: string) {
    if (!url) url = window.location.href;
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
}
