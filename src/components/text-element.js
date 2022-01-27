import '@polymer/paper-input/paper-textarea';
import { html, LitElement } from "lit";

class TextElement extends LitElement{
    constructor(){
        super();
    }

    render(){
        return html `
            <paper-textarea always-float-label label="Comments" rows="4">Comments</paper-textarea>
        `
    }
}

customElements.define('text-element', TextElement)