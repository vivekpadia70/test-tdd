import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, NavController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { HomePage } from './home';

let comp: HomePage;
let fixture: ComponentFixture<HomePage>;
let de: DebugElement;
let el: HTMLElement;

describe('Page: Product Page', () => {

    beforeEach(async(() => {

        TestBed.configureTestingModule({

            declarations: [MyApp, HomePage],

            providers: [
                NavController
            ],

            imports: [
                IonicModule.forRoot(MyApp)
            ]

        }).compileComponents();

    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(HomePage);
        comp    = fixture.componentInstance;

    });

    afterEach(() => {
        fixture.destroy();
        comp = null;

    });

    it('is created', () => {

        expect(fixture).toBeTruthy();
        expect(comp).toBeTruthy();

    });

    //testing function which push new task
    // comp.addNewTask(a, 'new');

    it('should add new task', ()=>{
      comp.addNewTask(comp.task_list,'new');
      expect(comp.task_list.length).toBe(1);
      expect(comp.task_list[0]).toBe('new');
    });

    //testing things on screen

    it('should contain an input field', () => {
      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('ion-input'));
      el = de.nativeElement;

      expect(el).toBeTruthy();
    });

    it('should contain a button', () => {
      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('button'));
      el = de.nativeElement;

      expect(el).toBeTruthy();
    });

    it('should contain a list', () => {
      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('ion-list'));
      el = de.nativeElement;

      expect(el).toBeTruthy();
    });

    //testing function to cancel task
    it('should remove task which is to be canceled', () => {
      comp.addNewTask(comp.task_list, 'new');
      expect(comp.task_list.length).toBe(1);
      comp.removeTask(comp.task_list, 'new');
      expect(comp.task_list.length).toBe(0);
    });
});
