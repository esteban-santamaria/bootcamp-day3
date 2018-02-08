import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	textResponse: string;
	constructor(private httpClient: HttpClient) {}
	ngOnInit() {
		this.getJoke();
	}
	getJoke() {
		setInterval(() => {
			this.httpClient.get<any>('https://api.icndb.com/jokes/random').subscribe((response) => {
				this.textResponse = response.value.joke;
			});
		}, 5000);
	}
}
