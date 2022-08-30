import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-passcode',
  templateUrl: './passcode.component.html',
  styleUrls: ['./passcode.component.css']
})
export class PasscodeComponent implements OnInit,OnChanges {
  size:string = ''
  constructor() { }
  passwordString : string = ''
  correctPassword : string  = '123123'
  @ViewChild('username') input!: ElementRef;
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes)
  }
  arr:string[]= ['','','','','','']
  number = '0123456789'

  nextTab(event:string, index:number){

    //let next = event.target.nextSibling;
    console.log('event')
    // if (event.data && (event.data>=0 && event.data<=9)) {
    //   // this.passwordString += event.data
    //   // console.log(this.passwordString)

    //   next.focus();
    //  console.log(this.arr)
    //   //console.log(this.passwordString === this.correctPassword)
    // }
    //  else {
    //   event.target.blur();
    // }
    // this.arr[index] = event.data

  }

  onClick(str:any){
    console.log(str)
    this.size = str.target.value
  }
}
