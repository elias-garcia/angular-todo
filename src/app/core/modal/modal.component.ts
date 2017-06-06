import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Input() isVisible = false;
  @Output() hide = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onHide() {
    this.hide.emit(false);
  }

}
