import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  template: `
    <div>
      <div *ngIf="!isEditing">
        {{ item }}
      </div>
      <div *ngIf="isEditing">
        <input type="text"
          [value]="item"
          (keyup.enter)="doEdit($event)" />
      </div>
      <button (click)="delete.emit(index)">delete</button>
      <button (click)="editMe()">edit</button>
    </div>
  `,
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() index: number;
  @Input() item: string;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();

  isEditing = false;

  constructor() { }

  ngOnInit() {
  }

  editMe() {
    this.isEditing = !this.isEditing;
  }

  doEdit($event) {
    this.edit.emit({ index: this.index, item: $event.target.value });
    this.isEditing = false;
  }

}
