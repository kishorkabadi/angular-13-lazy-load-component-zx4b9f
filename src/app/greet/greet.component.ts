import {
  Component,
  OnInit,
  Input,
  Output,
  ViewContainerRef,
  ComponentFactoryResolver,
  EventEmitter,
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
})
export class GreetComponent implements OnInit {
  @Input() message: string;
  myMessage;
  @Output() sendEventEmmiter = new EventEmitter();

  ngOnInit() {}
  greet() {
    this.sendEventEmmiter.emit('Hello I am GreetComponent');
  }
}
@NgModule({
  declarations: [GreetComponent],
  imports: [FormsModule],
})
class GreetComponentModule {}
