import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-notion-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './notion-page.component.html',
  styleUrls: ['./notion-page.component.css']
})
export class NotionPageComponent {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  Focus() {
    console.log(this.form.value);
  }

}
