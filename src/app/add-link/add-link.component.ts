import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Link } from '../link/link.model'

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  titleDemo = "titleDemo"
  urlDemo = "urlDemo"
  descriptionDemo = "descriptionDemo"
  @Output() linkSubmitted = new EventEmitter<Link>()
  constructor() { }

  ngOnInit() {
  }

  onLinkSubmitted(linkData: any){
    console.log('onLinkSubmitted happended. onLinkAdded() is being emitted');
    (!linkData) ? console.log('cannot receive linkData') : console.log(linkData);
    this.linkSubmitted.emit(new Link(linkData.title, linkData.url, linkData.description))
  }
}
