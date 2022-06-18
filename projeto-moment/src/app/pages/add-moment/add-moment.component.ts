import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { Router } from '@angular/router';
import { MomentsService } from 'src/app/services/moments.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-add-moment',
  templateUrl: './add-moment.component.html',
  styleUrls: ['./add-moment.component.css']
})
export class AddMomentComponent implements OnInit {
  btnText = "Compatilhar!";

  constructor(private momentService: MomentsService,
              private messageService: MessagesService,
              private router: Router) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if (moment.image)
      formData.append("image", moment.image)
    
    await this.momentService.createMoment(formData).subscribe();

    this.messageService.add('Momento adicionado!');

    this.router.navigate(['/']);
  }

}
