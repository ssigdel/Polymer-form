import '@polymer/paper-input/paper-input.js';
import { css, html, LitElement } from 'lit';


class InputElement extends LitElement{

    static get properties(){
        return {
            label: {type: String}
        }
    }

    static get styles(){
        return css `
        .input{
            margin: 20px;
        }
        `
    }

    constructor(){
        super();
        this.label = ''
    }

    render(){
        return html `
        <div class="input">
            <paper-input always-float-label label=${this.label}></paper-input>
        </div>
        `
    }
}

customElements.define('input-element', InputElement)