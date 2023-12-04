import { Component } from '@angular/core';
import { IDefaultTVShow } from '../idefault-tv-show';

@Component({
  selector: 'app-default-tv-show',
  templateUrl: './default-tv-show.component.html',
  styleUrls: ['./default-tv-show.component.css']
})
export class DefaultTvShowComponent {
current: IDefaultTVShow = {
name: '',
rating: '',
type: '',
language: '',
runtime: 30,
country: '',
premiered: new Date(),
image: '',
summary:'',
}
}
