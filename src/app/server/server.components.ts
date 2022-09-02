import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
   selector: 'app-server',
   templateUrl: './server.component.html',
})
export class ServerComponent{
   serverstatus: string = "online"
   serverId: number = 10

   getserverstatus(){
      return this.serverstatus;
   }
}