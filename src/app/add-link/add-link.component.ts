import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms'
import { Link } from '../link/link.model'

@Component({
  selector: 'app-add-link',
  templateUrl: './add-link.component.html',
  styleUrls: ['./add-link.component.css']
})
export class AddLinkComponent implements OnInit {
  addLinksForm = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.maxLength(30)]),
    url: new FormControl(null, [Validators.required]),
    description: new FormControl(null)
  })



  @Output() linkSubmitted = new EventEmitter<Link>()
  constructor() { }

  ngOnInit() {
  }

  onLinkSubmitted(){
    var val = this.addLinksForm.value
    console.log(val)
    this.linkSubmitted.emit(new Link(
      val.title,
      val.url,
      val.description
    ))
  }
}
