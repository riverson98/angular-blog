import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {} from '../../data/dataFake';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  private id: string | null = '0';
  @Input()
  photoCover: string =
    'https://img.quizur.com/f/img63d966885af0d3.87555390.jpg?lastEdited=1675191962';
  @Input()
  contentTitle: string = 'Olha nos ai';
  @Input()
  contentDescription: string = 'Bunda';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((it) => it.id == id)[0];
    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}
