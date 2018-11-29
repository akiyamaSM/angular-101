import {Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
    selector : 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    url = 'https://www.youtube.com/watch?v=AaNZBrP26LQ';
    @Input('label') label: string = 'sdf';
    @Output() link: EventEmitter<any> = new EventEmitter();
    clickMe(event){
        event.preventDefault();
        this.link.emit()
    }
}
