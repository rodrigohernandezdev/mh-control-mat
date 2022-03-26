import {Component, HostListener} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mh-control';
  sideBarOpen = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.sideBarOpen = event.target.innerWidth >= 500;
  }
  sideBarToggle() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
