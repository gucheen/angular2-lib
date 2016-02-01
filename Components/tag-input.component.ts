/**
 * Created by gucheng on 2/1/16.
 */
import {Component} from 'angular2/core';

@Component({
  selector: 'tagInput',
  template: `
    <div class="taginputContainer">
      <ul>
        <li *ngFor="#tag of tags" [attr.data]="tag">{{tag}}<a href="#">x</a></li>
      </ul>
      <input type="text" placeholder="Tags" [(ngModel)]="currentInput">
    </div>
  `,
  host: {
    '(keyup.enter)': 'onEnterKeyUp($event)',
    '(keydown.backspace)': 'onBackspaceKeyDown($event)'
  }
})

export class TagInput {
  private tags = [];

  private view = {
    container: null,
    tags: null,
    input: null
  };

  public currentInput:string;

  constructor() {
  }

  onEnterKeyUp($event) {
    $event.preventDefault();
    this.addTag(this.currentInput);
  }

  onBackspaceKeyDown($event) {
    if (this.currentInput.length === 0 && this.tags.length) {
      this.tags.pop();
      $event.preventDefault();
    }
  }

  private addTag(tag) {
    if (this.tags.indexOf(tag) !== -1) {
      return;
    }

    this.tags.push(tag);

    this.currentInput = '';
  }
}