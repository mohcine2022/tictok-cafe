import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServeurEditComponent } from './serveur-edit.component';

describe('ServeurEditComponent', () => {
  let component: ServeurEditComponent;
  let fixture: ComponentFixture<ServeurEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServeurEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServeurEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
