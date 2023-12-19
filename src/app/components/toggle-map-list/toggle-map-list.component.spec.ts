import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleMapListComponent } from './toggle-map-list.component';

describe('ToggleMapListComponent', () => {
  let component: ToggleMapListComponent;
  let fixture: ComponentFixture<ToggleMapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleMapListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleMapListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
