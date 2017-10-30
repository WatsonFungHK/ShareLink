import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() term = new EventEmitter<string>()

  onKey(value: string){
    // this.term = value
    this.term.emit(value)
  }

  constructor() { }

  ngOnInit() {
  }

}
