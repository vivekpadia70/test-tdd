import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  task_list: any = true;
  task: any;

  constructor(public navCtrl: NavController) {
      this.task_list=[];
  }

  addNewTask(a:any[], task: string):void{
    console.log('done');
    a.push(task);
  }

  removeTask(a:any[], task: string):void{
    console.log('removing');
    a.splice(a.indexOf(task), 1);
  }
}
