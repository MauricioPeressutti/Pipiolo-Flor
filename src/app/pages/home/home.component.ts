import { AfterViewInit, Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
    this.asdasdasd()
  }
asdasdasd(){
  
(function repeat(){
  setTimeout(function(){
    document.getElementById('fr')?.classList.remove('frenteNone');
    document.getElementById('fr')?.classList.add('frente')
  }, 300);
})();
}
}
