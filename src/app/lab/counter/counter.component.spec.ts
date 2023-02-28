/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CounterComponentForLab } from './counter.component';

describe('Counter2Component', () => {
  let component: CounterComponentForLab;
  let fixture: ComponentFixture<CounterComponentForLab>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponentForLab]
    })
    fixture = TestBed.createComponent(CounterComponentForLab);
    component = fixture.componentInstance;
  }));

  it("when click btn fires increse fun should the interpolation detect the change", () => {
    const button = fixture.debugElement.queryAll(By.css('button'))[0];
    button.triggerEventHandler("click");
    fixture.detectChanges();
    expect(component.counter).toEqual(1);
  })

  it("when click btn fires increse fun should the interpolation detect the change", () => {
    const button = fixture.debugElement.queryAll(By.css('button'))[1];
    button.triggerEventHandler("click");
    fixture.detectChanges();
    expect(component.counter).toEqual(-1);
  })
});
