import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  term = ''
  links = [
    {title: '3 ways good design makes you happy ', url: 'www.ted.com/talks/don_norman_on_design_and_emotion', description: 'In this talk from 2003, design critic Don Norman turns his incisive eye toward beauty, fun, pleasure and ...'}, 
    {title: 'JS has good parts', url: 'javascript.com/has%20good%20parts', description: 'Javascript has good parts'},
    {title: 'gordon', url: 'gordon.com/is%20so%20cool', description: 'gordon is so cool'},
    {title: 'JS is not java', url: 'javascript.com/is%20not%20java', description: 'Java and Javascript are similar like car and carpet are similiar'}
  ]
  constructor(){}
  ngOnInit(){
    var myLinks = JSON.parse(localStorage.getItem("myLinks"))
    console.log(myLinks)
    return myLinks.map((lnk)=>{
      this.links.push(lnk)
    })
  }

  onTermReceived(value: string){
    this.term = value
  }
  onLinkAdded(linkData: any){
    this.links.push({title: linkData.title, url: linkData.url, description: linkData.description})
    this.links = this.links.slice()
    localStorage.clear()
    localStorage.setItem("myLinks", JSON.stringify(this.links))
  }



}
