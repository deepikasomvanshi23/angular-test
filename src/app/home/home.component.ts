import { Component, OnInit } from '@angular/core';
import { MessageService } from './../message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public pageContent = 'And the Lord spake, saying, First shalt thou take out the Holy Pin. Then shalt thou count to three, no more, no less. Three shall be the number thou shalt count, and the number of the counting shall be three. Four shalt thou not count, neither count thou two, excepting that thou then proceed to three. Five is right out! Once the number three, being the third number, be reached, then lobbest thou thy Holy Hand Grenade of Antioch towards thy foe, who, being naughty in my sight, shall snuff it.';

	constructor(private messageService: MessageService) { }

    ngOnInit(): void {
    }

    public swapContent(): void {
		this.pageContent = this.messageService.showText();
        console.log('Clicked me!');
    }
}
