import { Component } from '@angular/core';
import { CornonaService } from './services/cornona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Corona App';
  countries : any;
  country;
  confirmed;
  recoverd;
  death;
  date;
  dates:[] = [];

  constructor( private CorServ : CornonaService){
     this.CorServ.getdata().subscribe(data => {console.log(data);
      this.countries = data;
         //////////////////////////////////
  

     })
  }
  ngOnInit() {

  }
  onChange(region){
   this.country = region;
   console.log(region);
   
  }
    ///////////////////////////////////////
         ///////////////////////
  getCoronaData()
  {
    this.CorServ.getcoronarealtimedata(this.country).subscribe(data => {console.log(data)
      var index = data.length-1 ; 
     
      for(let x of data)
      {
        console.log(x.Date);
        this.dates = x.Date;
        
      }

    


      this.confirmed = data[index].Confirmed;
      console.log(this.confirmed);
      
      this.recoverd = data[index].Recovered;
      console.log(this.recoverd);
      
      this.death = data[index].Deaths;
      console.log(  this.death);
      this.date = data[index].Date;
      console.log(  this.date);
      
    });
    
      
  }
}
