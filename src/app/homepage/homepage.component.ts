import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  public userid : any;
  constructor() { }
  fetchData = [
    {"content":"The US has started formally withdrawing troops from Afghanistan, beginning the end of what President Joe Biden called the forever war.","image":"../../assets/images/news1.jpg"},
    {"content":"Man charged over oxygen SOS for dying grandfather.Police in India are prosecuting a man who used Twitter try to find oxygen for his dying grandfather.","image":"../../assets/images/news2.jpg"},
    {"content":"Amazon continued to cash in on our new shop-work-relax-from-home habits in the first three months of this year, reporting a huge rise in sales and profits.","image":"../../assets/images/news3.jpg"},
  ];
  CovidObject = [
    {
      image: '../../assets/images/gallery/corona4.jpg',
      thumbImage: '../../assets/images/gallery/corona4.jpg',
      title: 'In the dense fog of Covid-19 misinformation in Papua New Guinea.'
    },
    {
    image: '../../assets/images/gallery/corona5.jpg',
    thumbImage: '../../assets/images/gallery/corona5.jpg',
    title: 'In India show the extent of the crisis gripping the nation as the second wave of coronavirus brings the death over 200,000'
  },
  {
    image: '../../assets/images/gallery/corona6.jpg',
    thumbImage: '../../assets/images/gallery/corona6.jpg',
    title: 'In California Now more than 31,000 people have died of the virus in the state.'
  },
    {
      image: '../../assets/images/gallery/corona.jpg',
      thumbImage: '../../assets/images/gallery/corona.jpg',
      title: 'India has recorded its highest daily coronavirus.'
  },
  {
    image: '../../assets/images/gallery/corona2.jpg',
    thumbImage: '../../assets/images/gallery/corona2.jpg',
    title: 'Hospitals in Delhi continued to send desperate messages for emergency oxygen supplies through the night on Sunday.'
},
{
  image: '../../assets/images/gallery/corona3.jpg',
  thumbImage: '../../assets/images/gallery/corona3.jpg',
  title: 'Australias threat to jail citizens returning home from India has sparked condemnation.'
}
]
  imageObject = [{
    image: '../../assets/images/gallery/williamson.jpg',
    thumbImage: '../../assets/images/gallery/williamson.jpg',
    title: 'David Warner was stripped of his sides captaincy on Saturday after SRH lost five out of its first six matches.'
}, {
    image: '../../assets/images/gallery/jagdish.jpg',
    thumbImage: '../../assets/images/gallery/jagdish.jpg',
    title: 'International body builder Jagdish Lad dies due to covid'
}, {
    image: '../../assets/images/gallery/klrahul.jpg',
    thumbImage: '../../assets/images/gallery/klrahul.jpg',
    title: 'KL Rahul will undergo surgery and it is unlikely he will be back in action for the remainder Match. '
},{
  image: '../../assets/images/gallery/norrie.jpg',
  thumbImage: '../../assets/images/gallery/norrie.jpg', 
    title: 'Estoril Open: Cameron Norrie loses to Albert Ramos-Vinolas in final'
}, {
    image: '../../assets/images/gallery/hamilton.jpg',
    thumbImage: '../../assets/images/gallery/hamilton.jpg',
    title: 'Lewis Hamilton fought back to Valtteri Bottas for a brilliant victory in the Portuguese Grand Prix.'
}, {
    image: '../../assets/images/gallery/thomas.jpg',
    thumbImage: '../../assets/images/gallery/thomas.jpg',
    title: 'Tour de Romandie: Geraint Thomas takes first title since 2018 Tour de France win'
},
{
  image: '../../assets/images/gallery/bale.jpg',
  thumbImage: '../../assets/images/gallery/bale.jpg',
  title: 'Gareth Bale hat-trick gave Tottenham a comfortable victory.'
}, ];
  ngOnInit(): void {
    this.userid = localStorage.getItem('userId');
  }

}
