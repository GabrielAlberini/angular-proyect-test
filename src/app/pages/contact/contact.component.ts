import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),  // Valida que el nombre tenga al menos 3 caracteres
          Validators.pattern('^[a-zA-Z ]*$')  // Solo permite letras y espacios
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(5)  // Asegura que el email tenga al menos 5 caracteres
        ]
      ],
      message: [
        '',
        [
          Validators.required,
          Validators.minLength(10)  // Asegura que el mensaje tenga al menos 10 caracteres
        ]
      ]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      alert('Mensaje enviado');
      this.contactForm.reset();
    }
  }
}
