import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewTimetableComponent } from './crew-timetable.component';

describe('CrewTimetableComponent', () => {
  let component: CrewTimetableComponent;
  let fixture: ComponentFixture<CrewTimetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewTimetableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
