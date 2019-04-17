import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  selector: 'app-proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css'],
  providers: [ ProposalService ]
})
export class ProposalShowComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private proposalService: ProposalService,
    private http: HttpClient
  ) {}

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    const proposalRequest = this.route.params
      .pipe(mergeMap((params: Params) =>
        this.proposalService.getProposal(+params.id)));
    proposalRequest.subscribe(response => this.proposal = response as any);
  }
}
