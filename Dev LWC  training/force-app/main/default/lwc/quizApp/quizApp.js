import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    selection ={};

    myQuestion=[
        {
            id:"Question1",
            question:"Which one of the following is not a template loop?",
            answers:{
                a:"for:each",
                b:"iterator",
                c:"map loop",
            },
            correctAnswer:"c"

        },
        {
            id:"Question2",
            question:"Which one of the following is not a directive?",
            answers:{
                a:"for:each",
                b:"map loop",
                c:"if:true"
            },
            correctAnswer:"b"

        },
        {
            id:"Question3",
            question:"Which one of the following is not a conditional rendering?",
            answers:{
                a:"if:true",
                b:"if:false",
                c:"switch:case"
            },
            correctAnswer:"c"
        }
    ]

    get allOptionsSelected(){

        return !(Object.keys(this.selection).length === this.myQuestion.length);

    }

    get isScordFull(){
        return `slds-text_heading_large ${this.correctAnswers === this.myQuestion.length ? 'slds-text-color_success' : 'slds-text-color_error'}`;
    }

    correctAnswers = 0;
    showResult = false;

    

   
    changeHandler(event){

        const nameDraft = event.target.name;
        const valueDraft = event.target.value; // or we can use below syntax

        //  const {nameDraft,valueDraft} = event.target; //destructuring of event.target object

        this.selection = {...this.selection,[nameDraft]:valueDraft}; //spread operator to add new key& value to existing object
        console.log("selection is ", JSON.stringify(this.selection));

        console.log("Answer selected is  ", JSON.stringify(this.selection[nameDraft]));
        

    }

    submitHandler(event){

        event.preventDefault(); //to prevent default behaviour of form tag in lwc like it stops refresh of page on submit
      
       let correctArray = this.myQuestion.filter(item => this.selection[item.id] === item.correctAnswer);

        this.correctAnswers = correctArray.length;
        this.showResult = true;

    }

    resetHandler(event){

        this.selection = {};
        this.showResult = false;
        this.correctAnswers=0

     

    }
    
}