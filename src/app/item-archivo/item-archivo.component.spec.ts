import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemArchivoComponent } from './item-archivo.component';

describe('ItemArchivoComponent', () => {
  let component: ItemArchivoComponent;
  let fixture: ComponentFixture<ItemArchivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemArchivoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemArchivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
