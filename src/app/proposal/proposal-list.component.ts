import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css']
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'https://rubypythmore.com',
    'Ruby on Rails', 150, 120, 15, 'scott.goyette@rubypythmore.com')
  proposalTwo: Proposal = new Proposal(99, 'Abc Company', 'https://rubypythmore.com',
    'Ruby on Rails', 150, 120, 15, 'scott.goyette@rubypythmore.com')
  proposalThree: Proposal = new Proposal(300, 'Abc Company', 'https://rubypythmore.com',
    'Ruby on Rails', 150, 120, 15, 'scott.goyette@rubypythmore.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ];
}
