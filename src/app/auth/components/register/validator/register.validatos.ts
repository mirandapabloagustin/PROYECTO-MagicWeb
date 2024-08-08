import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatchValidator(form: AbstractControl): ValidationErrors | null {
  const password = form.get('password')?.value;
  const password2 = form.get('password2')?.value;
    return password === password2 ? null : { passwordMatch: true };
}