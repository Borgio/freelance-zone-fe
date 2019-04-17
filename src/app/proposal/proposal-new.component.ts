import { Component } from '@angular/core';
import {Proposal } from './proposal';
import { ProposalService } from './proposal.service';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css'],
  providers: [ ProposalService ]
})
export class ProposalNewComponent {
  proposal = new Proposal();
  submitted = false;

  constructor(
    private proposalService: ProposalService
  ) {}

  createProposal(proposal) {
    this.submitted = true;
    this.proposalService.createProposal(proposal)
        .subscribe(
          data => true,
          error => {
            console.log('Error saving proposal');
            return throwError(error);
          }
        );
  }
}
