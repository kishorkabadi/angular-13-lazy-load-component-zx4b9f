import {
  Component,
  OnInit,
  Input,
  Output,
  ViewContainerRef,
  ComponentFactoryResolver,
  ViewChild,
} from '@angular/core';
import { GreetComponent } from './greet/greet.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ';
  @ViewChild('greetComp', { read: ViewContainerRef })
  private greetViewchildRef: ViewContainerRef;
  constructor(
    private vcrf: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}
  loadComponent() {
    this.greetViewchildRef.clear();

    import('./greet/greet.component').then(({ GreetComponent }) => {
      let greetComp = this.greetViewchildRef.createComponent(
        this.cfr.resolveComponentFactory(GreetComponent)
      );
      greetComp.instance.message = 'I am from app.component';
      greetComp.instance.sendEventEmmiter.subscribe((data) => {
        console.log(data);
      });
    });
  }
}
