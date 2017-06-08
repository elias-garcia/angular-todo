import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeNewComponent } from './practice-new.component';

describe('PracticeNewComponent', () => {
  let component: PracticeNewComponent;
  let fixture: ComponentFixture<PracticeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
