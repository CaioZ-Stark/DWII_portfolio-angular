import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  private service = inject(LoginService);
  private router = inject(Router);

  erro = '';
  entrando = false;

  form = new FormGroup({
    usuario: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  });

  entrar() {

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.entrando = true;
    this.erro = '';

    const dados = {
      usuario: this.form.value.usuario ?? '',
      senha: this.form.value.senha ?? ''
    };

    this.service.entrar(dados).subscribe({
      next: (resposta) => {

        console.log(resposta);

        this.entrando = false;
        
        this.router.navigate(['/']);

        
      },

      error: (err: HttpErrorResponse) => {

        this.entrando = false;

        this.erro = err.error?.erro ?? 'Não foi possível fazer o login.';
      }
    });
  }
}