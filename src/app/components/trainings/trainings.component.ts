import { Component, OnInit } from '@angular/core';
import { Training } from '../../models/Training';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Customer } from '../../models/customer';
import { TrainingService } from 'src/app/services/training.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'],
})
export class TrainingsComponent implements OnInit {
  listTrainings: Training[] | undefined;
  error = null;
  

  constructor(private trainingService: TrainingService, private cartService: CartService, private router: Router, public authService : AuthenticationService) { }

  ngOnInit(): void {
    this.getAllTrainings();    
  }

  /**
   * Read the all saved (db.json) trainings using json-server api rest
   */
  getAllTrainings(){
    this.trainingService.getAllTrainings().subscribe({
      next : (data) => this.listTrainings = data,
      error : (err) => this.error = err.message,
      complete : () => this.error = null

    });
  }

  /**
   * 
   * @param trainingId 
   */
   deleteTraining(trainingId :number){
     this.trainingService.deleteTraining(trainingId).subscribe(data =>{
       console.log(data);
       
     });
   }

   updateTraining(trainingId: number){
      this.router.navigateByUrl('updateTrainingForm/'+trainingId)
  }

  /**
   * 
   */
  showCreateNewTrainingForm(){
    this.router.navigateByUrl('createTrainingForm')
  }

  onChangeEvent(training: Training, event: any) {
    training.quantity = event.target.value;
  }

  /**
   * Create a cart using the localStorage
   * @param training 
   */
  addToLocalStorage(training: Training) {
    this.cartService.saveTraining(training);
    // this.router.navigateByUrl('cart');
  }
}
