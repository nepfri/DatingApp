import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'DatingApp';
  http = inject(HttpClient);
  forecasts: any;

  ngOnInit(): void {
    this.http.get('https://localhost:5001/weatherforecast').subscribe({
      next: response => this.forecasts = response,
      error: error => console.log(error),
      complete: ()=> console.log('Request has completed')
    });
  }
}
