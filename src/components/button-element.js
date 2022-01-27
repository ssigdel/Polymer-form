import '@polymer/paper-button/paper-button.js';
import { html, LitElement } from 'lit';

class ButtonElement extends LitElement{

    constructor(){
        super();
    }

    render(){
        return html `
            <paper-button raised>Create</paper-button>
            <paper-button>CANCEL</paper-button>
        `
    }
}

customElements.define('button-element', ButtonElement)