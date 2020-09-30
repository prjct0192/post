import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  @Input() title;
  @Input() body;
  @Input() id;
  @Input() img;
}
