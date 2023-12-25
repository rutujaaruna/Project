// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, Subscriber } from 'rxjs';
// import { environment } from 'src/environment/environment';

// @Injectable({
//     providedIn: 'root'
// })
// export class ApiService {
//     private baseUrl = environment.apiUrl;

//     constructor(
//         private httpClient: HttpClient,
//     ) { }

//     private handleError(error: any) {
//         console.error(error);
//     }

//     get(url: string): Observable<string> {
//         return new Observable((observer: Subscriber) => {
//             var objectUrl: string;
//             this.httpClient

//                 .get(url, {
//                     responseType: 'blob'
//                 })
//                 .subscribe(m => {
//                     objectUrl = URL.createObjectURL(m);
//                     observer.next(objectUrl);
//                 });

//             return () => {
//                 if (objectUrl) {
//                     URL.revokeObjectURL(objectUrl);
//                 }
//             };
//         });
//     }


// }