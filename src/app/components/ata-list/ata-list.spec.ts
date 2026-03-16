import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtaListComponent } from './ata-list';

describe('AtaList', () => {
  let component: AtaListComponent;
  let fixture: ComponentFixture<AtaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtaListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtaListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
