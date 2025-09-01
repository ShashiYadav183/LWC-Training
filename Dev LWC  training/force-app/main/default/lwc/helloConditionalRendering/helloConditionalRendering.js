import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false;

    textValue;

    handleToggle() {
        this.isVisible = true;
    }

    changeHandler(event){
        this.textValue = event.target.value;
    }

    get textCheck(){
        return this.textValue === 'hello';
    }

}