import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  produtoForm: FormGroup = this.fb.group({
    descricao: ["", Validators.required]
  });

  @Input() set descricao(value: string) {
    if(value) {
      this.produtoForm.get('descricao')?.setValue(value);
    }
  }

  @Output() submit = new EventEmitter<{descricao: string}>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit():void {
    this.submit.next(this.produtoForm.value);
  }
}
