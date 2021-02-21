import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialnetComponent } from './socialnet.component';

describe('SocialnetComponent', () => {
  let component: SocialnetComponent;
  let fixture: ComponentFixture<SocialnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
