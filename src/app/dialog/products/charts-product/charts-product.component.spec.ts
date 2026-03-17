import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsProductComponent } from './charts-product.component';

describe('ChartsProductComponent', () => {
  let component: ChartsProductComponent;
  let fixture: ComponentFixture<ChartsProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartsProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
