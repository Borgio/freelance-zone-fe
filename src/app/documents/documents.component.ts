import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  selector: 'app-documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
  pageTitle = 'Document Dashboard';
  documents: Document[] = [
    {
      title: 'first_doc',
      description: 'first document',
      file_url: 'http://google.com',
      updated_at: '04/10/2019',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/800px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: 'second_doc',
      description: 'second document',
      file_url: 'http://google.com',
      updated_at: '04/10/2019',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/800px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: 'third_doc',
      description: 'third document',
      file_url: 'http://google.com',
      updated_at: '04/10/2019',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/800px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
    }
  ]
}
