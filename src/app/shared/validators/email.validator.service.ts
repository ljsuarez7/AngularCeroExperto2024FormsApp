import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidator implements AsyncValidator{

  // validate(control: AbstractControl): Observable<ValidationErrors | null> {

  //   const email = control.value;
  //   console.log({email});

  //   return of({
  //     emailTaken: true
  //   }).pipe(
  //     delay(2000)
  //   )

  // }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>( (subscriber) => {

      console.log({email});

      if(email === 'fernando@google.com'){ //Esto es un ejemplo, pero deberia ser una llamada a un servicio que indique si el mail existe en la bd
        subscriber.next({emailTaken: true});
        subscriber.complete();
        // return;
      }

      subscriber.next(null);
      subscriber.complete();

    }).pipe(
      delay(3000) //Esto es para poder simular el tiempo de respuesta del servicio del comentario anterior
    );

    return httpCallObservable;

  }

}
