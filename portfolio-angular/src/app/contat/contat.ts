import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContatoService } from '../contat.service';

@Component({
  selector: 'app-contat',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contat.html',
})
export class Contat {
  private fb = inject(FormBuilder);
  private service = inject(ContatoService);
  enviando = false; sucesso = ''; erro = ''; 
  
  form = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    mensagem: ['', [Validators.required, Validators.minLength(10)]],
  });
  
  onSubmit(){
    this.sucesso = ''; this.erro = '';
    if (this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    this.enviando = true;
    this.service.enviar(this.form.getRawValue()).subscribe({
      next: (resp) =>{
        this.sucesso = resp.mensagem;
        this.form.reset();
        this.enviando = false;
      },
      error: () => {
        this.erro = 'Não foi possível enviar. Tente novamente.';
        this.enviando = false;
      },
    })
  }
}
