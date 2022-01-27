import '@vaadin/vaadin-date-picker/vaadin-date-picker';
import { css, html, LitElement } from 'lit';

class DateElement extends LitElement{

    static get styles(){
        return css `
            vaadin-date-picker{
                width: 100%;
            }
        `
    }
    
    constructor(){
        super();
    }

    render(){
        return html `
            <vaadin-date-picker label="Label" value="2022-1-27" clear-button-visible></vaadin-date-picker>
        `
    }
}

customElements.define('date-elment', DateElement)