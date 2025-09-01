import { LightningElement } from 'lwc';

export default class TemplateLooping extends LightningElement {

    carList = ['BMW', 'Audi', 'Mercedes', 'Lexus', 'Toyota'];

    ceoList=[
        {id:1, name:'Elon Musk', company:'Tesla'},
        {id:2, name:'Tim Cook', company:'Apple'},
        {id:3, name:'Sundar Pichai', company:'Google'},
        {id:4, name:'Satya Nadella', company:'Microsoft'},
    ]
}