import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroceryDialogPage } from './grocery-dialog.page';

describe('GroceryDialogPage', () => {
  let component: GroceryDialogPage;
  let fixture: ComponentFixture<GroceryDialogPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GroceryDialogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
