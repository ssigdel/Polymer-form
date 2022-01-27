import '@polymer/paper-icon-button/paper-icon-button';
import { html, LitElement } from 'lit';

class IconElement extends LitElement{

    constructor(){
        super();
    }

    render(){
        return html `
            <paper-icon-button icon="cross"></paper-icon-button>
        `
    }
}

customElements.define('icon-element', IconElement)