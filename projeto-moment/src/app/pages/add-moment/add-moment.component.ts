import { Component, OnInit } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentsService } from 'src/app/services/moments.service';

@Component({
  selector: 'app-add-moment',
  templateUrl: './add-moment.component.html',
  styleUrls: ['./add-moment.component.css']
})
export class AddMomentComponent implements OnInit {
  btnText = "Compatilhar!";

  constructor(private momentService: MomentsService) { }

  ngOnInit(): void {
  }

  async createHandler(moment: Moment) {
    const formData = new FormData()

    formData.append("title", moment.title)
    formData.append("description", moment.description)

    if (moment.image)
      formData.append("image", moment.image)
    
    await this.momentService.createMoment(formData).subscribe();
  }

}
