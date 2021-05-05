import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateUserGalleryComponent } from './private-user-gallery.component';

describe('PrivateUserGalleryComponent', () => {
  let component: PrivateUserGalleryComponent;
  let fixture: ComponentFixture<PrivateUserGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateUserGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateUserGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
