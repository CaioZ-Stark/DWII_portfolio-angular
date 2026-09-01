
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

export interface RespostaLogin {
  sucesso: boolean;
  mensagem: string;
  usuario: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private http = inject(HttpClient);

  private url ='https://laughing-barnacle-5g69x99pr6x43j4g-8000.app.github.dev/api/login.php';

  entrar(dados: { usuario: string; senha: string }): Observable<RespostaLogin> {
    return this.http.post<RespostaLogin>(this.url, dados).pipe(
      tap((resposta) => {
        if (resposta.sucesso) {
          sessionStorage.setItem('logado', 'true');
          sessionStorage.setItem('usuario', resposta.usuario);
        }
      })
    );
  }

  estaLogado(): boolean {
    return sessionStorage.getItem('logado') === 'true';
  }

  sair(): void {
    sessionStorage.removeItem('logado');
    sessionStorage.removeItem('usuario');
  }
}