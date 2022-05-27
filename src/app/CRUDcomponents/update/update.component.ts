import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  updated: boolean = false;

  constructor(private trainingService : TrainingService, private aRouter: ActivatedRoute, private router: Router) { }
  updateTrainingForm = new FormGroup({
    name : new FormControl(''),
    description : new FormControl(''),
    price : new FormControl(''),
    quantity : new FormControl('')
  })
  ngOnInit(): void {
     console.log(this.aRouter.snapshot.params['id']);
     this.trainingService.getTrainingById(this.aRouter.snapshot.params['id']).subscribe((result: any) =>{
       console.log(result);
       
      this.updateTrainingForm = new FormGroup({
        name : new FormControl(result.name),
        description : new FormControl(result.description),
        price : new FormControl(result.price),
        quantity : new FormControl(result.quantity)
      });
      console.log(this.updateTrainingForm.value);

     });
     
     
  
  }

  updateTraining(updateTrainingForm: FormGroup){
    console.log(updateTrainingForm.value);
    
    this.trainingService.updateTraining(updateTrainingForm, this.aRouter.snapshot.params['id']).subscribe((result)=>{
      // console.warn(result);
      this.updated = true;      
    });
   // this.router.navigateByUrl('/trainings')
  }
}