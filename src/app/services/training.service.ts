import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Training } from '../models/Training';

@Injectable({
  providedIn: 'root',
})
export class TrainingService {
  constructor(private http: HttpClient) {}

  /**
   *
   * @returns http GET methocd
   */
  getAllTrainings() {
    return this.http.get<Training[]>(environment.host + '/trainings');
  }

  /**
   * http POST method
   * @param training
   * @returns
   */
  addTraining(training: Training) {
    console.log(training);
    
    return this.http.post<Training>(environment.host + '/trainings', training);
  }

  /**
   *
   * @param trainingId
   */
  deleteTraining(trainingId: number) {
    return this.http.delete(environment.host + '/trainings/' + trainingId);
  }

  /**
   *
   * @param trainingId
   */
   getTrainingById(trainingId: number) {
    return this.http.get(environment.host + '/trainings/' + trainingId);
  }

  updateTraining(form: FormGroup, id: any){
    return this.http.put(environment.host+'/trainings/'+id, form.value)
  }
}
