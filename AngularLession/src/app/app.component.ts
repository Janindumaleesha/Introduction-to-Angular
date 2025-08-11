import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, DashboardComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'AngularLession';
  imageUrl: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pXQTat5xa_jxh8xM2p-AKDEXFPYgRqOI2Q&s';
  isDisabled: boolean = true;
  ariaLableText: string = 'You can click this button.';
  colSpan = 2;
  phara: string = "I'm Janindu Maleesha Ariyasinghe.";
  color: string = 'red';
  isActive: boolean = true;
  text: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  name: string = 'Janindu'

  clickButton() {
    console.log("Button Click!!!")
  }

  typeInput(event: KeyboardEvent) {
    if (event.key == 'Enter'){
      console.log("Enter clicked.")
    }
  }

  keydoenClicked() {
    console.log("Enter clicked.")
  }

  inputValue: string = ''

  showData(input : HTMLInputElement) {
    this.inputValue = input.value
    console.log(input.value)
  }

  twoWayValue: string = ''
}
