import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    LoginComponent, 
    DashboardComponent, 
    FormsModule, 
    NgIf,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Angular Lession';
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

  topic: string = 'Angular Lession'
  isLogging: boolean = true
  status: string = 'success'
  marks: number = 50

  isContentVisible: boolean = true

  toggleContent() {
    this.isContentVisible = !this.isContentVisible
  }

  isSignIn: boolean = false
  role: string = 'admin' //admin, editor, user

  students: string[] = ['Janindu', 'Diluni', 'Daham']

  users: User[] = [
    // {id: 1, name: 'User1', email: 'user1@email.com'},
    // {id: 2, name: 'User2', email: 'user2@email.com'},
    // {id: 3, name: 'User3', email: 'user3@email.com'}
  ]

  addNewUser() {
    let length = this.users.length
    let user: User = { id: length + 1, name: `User${length + 1}`, email: `user${length + 1}@gmail.com` }
    this.users.push(user)
  }

  // deleteUser(user: User) {
  //   // console.log(user)

  //   let indexOfTheUser = this.users.indexOf(user)
  //   // console.log(indexOfTheUser)

  //   this.users.splice(indexOfTheUser, 1)
  // }

  deleteUser(indexOfTheUser: number) {
    // console.log(indexOfTheUser)
    this.users.splice(indexOfTheUser, 1)
  }

  neastedItems: { category: string, items: string[] }[] = [
    { category: 'Fruits', items : ['Apple', 'Banana', 'Orange'] },
    { category: 'Animals', items : ['Lion', 'Dog', 'Cat'] }
  ]
  
}

interface User {
    id: number,
    name: string,
    email: string
  }