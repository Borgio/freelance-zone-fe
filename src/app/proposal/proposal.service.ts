import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Proposal } from './proposal';

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://localhost:3001/proposals';

  constructor(private http: HttpClient) {}

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl)
                    .pipe(map((res: HttpResponse<any>) => res as unknown as Proposal[]), catchError(this.handleError));
  }

  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + '/' + id + '.json');
  }

  createProposal(proposal) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.proposalsUrl, JSON.stringify(proposal), httpOptions).pipe(map((res: HttpResponse<any>) => res));
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return throwError(errMsg);
  }
}
