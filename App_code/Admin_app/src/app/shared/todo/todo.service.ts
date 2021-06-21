/*
  Authors : MellowCorp
  Website : https://mellowcoporation.com/
  App Name : Ecommerce
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://mellowcorporation.com/
  Copyright and Good Faith © 2020-present Mellowcorp.
*/
import { Injectable } from '@angular/core';
import { Todo } from './index';

@Injectable()
export class TodoService {

  private items: Todo[] = [
    new Todo('Hey.. Attach your new file', 'Java', false),
    new Todo('Navigation working', 'Angular 2', true),
    new Todo('Files submited successfully', 'Codeigniter', false)
  ];
  constructor() { }

  getTodoList() {
    return this.items;
  }


  deleteItem(item: Todo) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  additem(item: Todo) {
    this.items.push(item);
  }
}
