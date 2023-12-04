import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultTvShowComponent } from './default-tv-show.component';

describe('DefaultTvShowComponent', () => {
  let component: DefaultTvShowComponent;
  let fixture: ComponentFixture<DefaultTvShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultTvShowComponent]
    });
    fixture = TestBed.createComponent(DefaultTvShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
