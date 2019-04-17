import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  selector: 'app-proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css'],
  providers: [ ProposalService ]
})
export class ProposalListComponent implements OnInit {
  proposals: Proposal[];
  errorMessage: string;
  mode = 'Observable';

  constructor(private proposalService: ProposalService) {}

  ngOnInit() {
    const timer1 = timer(0, 5000);
    timer1.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals()
        .subscribe(
          proposals => this.proposals = proposals,
          error => this.errorMessage = this.handleError(error)
        );
  }

  private handleError(error: any): string {
    return error as any;
  }
}
