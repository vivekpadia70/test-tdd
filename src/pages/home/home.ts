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
      this.task_list=['hello', 'world'];
  }

  addNewTask(a:any[], task: string):void{
    console.log('done');
    a.push(task);
  }

  pri(){
    console.log('helllo world')
  }
}
