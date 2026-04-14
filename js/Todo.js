export default class Todo {
    #text
    #index
    #pElem

    constructor(text,pElem,index){
        this.#pElem = pElem;
        this.#text = text;
        this.#index = index;
    }

    remove(){
        const event = new CustomEvent("remove",{
            detail: this.#index
        });
        this.#pElem.dispatchEvent(event);
    }

    ready(){
        const event = new CustomEvent("ready",{
            detail: this.#index
        });
        this.#pElem.dispatchEvent(event);
    }
}