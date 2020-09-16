import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   constructor() { }
   showText() {
      let newText = 'Right. One... two... five!';
      return newText;
   }
}
