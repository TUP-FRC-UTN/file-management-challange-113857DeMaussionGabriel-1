import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaArchivosComponent } from './alta-archivos.component';

describe('AltaArchivosComponent', () => {
  let component: AltaArchivosComponent;
  let fixture: ComponentFixture<AltaArchivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaArchivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
