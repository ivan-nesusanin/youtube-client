import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@data/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public name = 'Your Name';

  public buttonName = 'Login';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.login$.subscribe(value => {
      this.name = value;
      this.buttonName = 'Logout';
    });
  }

  goToRegister(): void {
    if (this.buttonName === 'Login') {
      this.router.navigate(['/auth']);
    } else {
      localStorage.clear();
      this.router.navigate(['/auth']);
      this.buttonName = 'Login';
      this.name = 'Your Name';
    }
  }
}
