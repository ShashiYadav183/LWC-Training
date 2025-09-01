import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    //Data binding examples 
    fullName = 'shashi yadav'

    title = 'Admin'

    changeHandler(event) {

        this.title = event.target.value;

    }

    //@track example

    @track details = {
        name: 'shashi',
        age: 24,
        city: 'indore'
    }

    trackedChangeHandler(event) {
        this.details.city = event.target.value;

        //this.details= {...this.details, city: event.target.value}; //this syntax helpful in case of non tracked propertys


    }

    //getter example

    rankings = ['1st', '2nd', '3rd', '4th']

    get rankValue() {

        return this.rankings[2];
    }



}