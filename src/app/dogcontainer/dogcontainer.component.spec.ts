import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogcontainerComponent } from './dogcontainer.component';

describe('DogcontainerComponent', () => {
  let component: DogcontainerComponent;
  let fixture: ComponentFixture<DogcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogcontainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
