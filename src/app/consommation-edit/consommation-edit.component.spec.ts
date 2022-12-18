import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationEditComponent } from './consommation-edit.component';

describe('ConsommationEditComponent', () => {
  let component: ConsommationEditComponent;
  let fixture: ComponentFixture<ConsommationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommationEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsommationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
