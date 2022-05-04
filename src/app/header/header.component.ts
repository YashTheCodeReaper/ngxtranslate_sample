import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {}

  changeLocale(event: any){
    this.translateService.use(event.target.value)
  }
}
