// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { Training } from 'src/app/models/Training';
// import { TrainingService } from 'src/app/services/training.service';

// @Component({
//   selector: 'app-create',
//   templateUrl: './create.component.html',
//   styleUrls: ['./create.component.css']
// })
// export class CreateComponent implements OnInit {

//   constructor(private trainingService : TrainingService, private router: Router) { }

//   ngOnInit(): void {

//   }

//   saveNewTraining(training : Training){
//     this.trainingService.addTraining(training).subscribe((result)=>{
//       console.warn(result)
//     }
//     );
//     this.router.navigateByUrl('trainings')
//   }

// }


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Training } from 'src/app/models/Training';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  created: boolean = false;

  myFormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl('')
  })

  constructor(private trainingService : TrainingService, private router: Router) { }

  ngOnInit(): void {

  }

  saveNewTraining(myForm : FormGroup){
    
    this.trainingService.addTraining(myForm.value).subscribe((result)=>{
      //console.warn(result)
      this.created = true;
    }
    );
    // this.router.navigate(['http://localhost:4200/trainings']).then(()=>{
    //   window.location.reload();
    // })
  }

}
