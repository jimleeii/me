import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit, OnDestroy {

  // @ViewChild('welcomeNode', { static: true }) private welcomeNodeEl: ElementRef;
  // @ViewChild('welcomeTitle', { static: true }) private welcomeTitle: ElementRef;

  // constructor(private renderer: Renderer2) { }

  // observableTimer(): void {
  //   const source = timer(1000, 1000);
  //   const abc = source.subscribe((val) => {
  //     if (this.startTime == val) {
  //       this.renderer.setStyle(this.welcomeNodeEl.nativeElement, 'opacity', '1');
  //     }
  //     else if (this.showTime == val) {
  //       this.renderer.setStyle(this.welcomeNodeEl.nativeElement, 'background-color', '#011627');
  //       this.renderer.setStyle(this.welcomeTitle.nativeElement, 'opacity', '0');
  //     }
  //     else if (this.fadeTime == val) {
  //       this.renderer.setStyle(this.welcomeNodeEl.nativeElement, 'margin-top', '-100%');
  //       this.renderer.setStyle(this.welcomeTitle.nativeElement, 'display', 'none');
  //     }
  //     else if (this.endTime == val) {
  //       this.ngOnDestroy();
  //     }
  //   });
  // }

  config: any;
  fullpage_api: any;

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      sectionsColor: ['#7BAABE', 'whitesmoke', '#7BAABE', 'whitesmoke', '#7BAABE'],
      anchors: ['p1', 'p2', 'p3', 'p4', 'p5'],
      navigation: true,

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },

      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  ngOnInit(): void {
    // this.observableTimer();
  }

  ngOnDestroy(): void {

  }

}
