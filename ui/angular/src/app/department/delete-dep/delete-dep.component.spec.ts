import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDepComponent } from './delete-dep.component';

describe('DeleteDepComponent', () => {
  let component: DeleteDepComponent;
  let fixture: ComponentFixture<DeleteDepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDepComponent]
    });
    fixture = TestBed.createComponent(DeleteDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
