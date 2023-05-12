import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartenComponent } from './karten.component';

describe('KartenComponent', () => {
  let component: KartenComponent;
  let fixture: ComponentFixture<KartenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KartenComponent]
    });
    fixture = TestBed.createComponent(KartenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
