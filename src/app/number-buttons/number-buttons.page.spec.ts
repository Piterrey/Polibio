import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberButtonsPage } from './number-buttons.page';

describe('NumberButtonsPage', () => {
  let component: NumberButtonsPage;
  let fixture: ComponentFixture<NumberButtonsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberButtonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
