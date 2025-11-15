import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  buttonText: string = "ACCESS";
  buttonTexts: string[] = ["vender", "comprar"];

  buttonObject = {
    label:"adicionar ao carrinho",
  };

  getAlert() {
    alert("Ola")
  }

}
