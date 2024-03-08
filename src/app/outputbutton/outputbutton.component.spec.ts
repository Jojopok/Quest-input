import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputbuttonComponent } from './outputbutton.component';

describe('OutputbuttonComponent', () => {
  let component: OutputbuttonComponent;
  let fixture: ComponentFixture<OutputbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputbuttonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OutputbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
