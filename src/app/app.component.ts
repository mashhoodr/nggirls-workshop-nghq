import { Component } from '@angular/core';


interface Todo {
  item: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  todoList: Todo[] = [
    { item: 'something1' },
    { item: 'something2' },
    { item: 'something3' },
    { item: 'something4' }
  ];

  addTodo(inputElement) {
    this.todoList.push({ item: inputElement.value });
    inputElement.value = '';
  }

  delete(todoIndex) {
    this.todoList.splice(todoIndex, 1);
  }

  edit(updatedItem) {
    this.todoList.forEach((item, index) => {
      if (index === updatedItem.index) {
        item.item = updatedItem.item;
      }
    });
  }


}
