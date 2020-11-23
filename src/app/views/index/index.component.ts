import { Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
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

  logo = 'W.L.';
  username = 'Wei Li';
  today = new Date();

  blue = '#011627';
  white = '#FDFFFC';
  green = '#2EC4B6';
  red = '#e71D36';
  yellow = '#FF9F1C';

  year;
  config;
  fullpage_api;

  constructor() {
    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: '',
      anchors: ['home', 'about', 'work', 'projects'],
      sectionsColor: [this.blue, this.green, this.red, this.yellow],
      menu: '#menu',
      sectionSelector: '.vertical-scrolling',
      slideSelector: '.horizontal-scrolling',

      // events callback
      afterLoad: (origin, destination, direction) => {
        if (destination.anchor === "home") {
          this.headerColorEvent(this.blue);
        }
        else if (destination.anchor === "about") {
          this.headerColorEvent(this.green);
          this.setTextAreaHeight();
        }
        else if (destination.anchor === "work") {
          this.headerColorEvent(this.red);
        }
        else if (destination.anchor === "projects") {
          this.headerColorEvent(this.yellow);
        }

        this.hightlightNavMarker(destination.anchor);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width, height) => {
        // console.log('afterResize' + width + ' ' + height);
        this.setTextAreaHeight();
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        // console.log(destination);
      }
    };
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  headerColorEvent(color) {
    const header = document.getElementById('header');
    const links = header.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
      const element = links[i];

      element.addEventListener('mouseover', () => {
        element.style.color = color;
      });

      element.addEventListener('mouseout', () => {
        element.style.color = this.white;
      });
    }
  }

  hightlightNavMarker(anchor) {
    const marker = document.getElementById('marker');
    const links = marker.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++) {
      const element = links[i];

      element.parentElement.classList.remove('active');
      if (element.parentElement.getAttribute('data-menuanchor') === anchor) {
        element.parentElement.classList.add('active');
      }
    }
  }

  setTextAreaHeight() {
    const messagePanel = document.getElementById('message');
    const textarea = messagePanel.getElementsByTagName('textarea')[0];

    console.log(messagePanel.offsetHeight, textarea.offsetHeight);
    textarea.style.height = (messagePanel.offsetHeight - 180) + 'px';
    console.log(textarea.offsetHeight);
  }

  ngOnInit() {
    this.year = this.today.getFullYear() - 2005;
  }

  ngOnDestroy(): void {
    this.fullpage_api.destroy('all');
  }

}
