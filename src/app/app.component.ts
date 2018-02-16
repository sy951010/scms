import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  public y: number;
  public x: number;
  ngOnInit() {
    this.x = 1024;
    this.y = document.body.offsetHeight - 255;
    let that = this;
    window.onresize = function () {
      that.y = document.body.offsetHeight - 255;
    }
  }
}
