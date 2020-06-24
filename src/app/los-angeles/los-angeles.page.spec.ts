import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LosAngelesPage } from './los-angeles.page';

describe('LosAngelesPage', () => {
  let component: LosAngelesPage;
  let fixture: ComponentFixture<LosAngelesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LosAngelesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LosAngelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
