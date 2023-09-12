import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  // Skapa variabler för användarnamn och lösenord
  username: string = '';
  password: string = '';
  email: string = '';

  constructor() {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onLogin(): void {
    console.log(this.username + ' and ' + this.password);
    // Implementera inloggningslogik här
    // Använd `this.username` och `this.password` för att hämta användardata

    // Exempel: Kolla om användaren har rätt inloggningsuppgifter
    if (this.username === 'demo' && this.password === 'test') {
      alert('Inloggning lyckades!'); // Lämplig meddelandeåtgärd
    } else {
      alert('Fel användarnamn eller lösenord.'); // Lämplig felhantering
    }
  }

  onSignUp(): void {}
}
