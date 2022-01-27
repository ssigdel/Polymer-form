import '@polymer/paper-checkbox/paper-checkbox';
import { css, html, LitElement } from 'lit';

const items = [
    'BRD2 Affinity_High_Affinity',
    'BRD2 AMP_PNP_competitive',
    'BRD2 NRX-0459676_non-competitive'
]

class CheckElement extends LitElement{
    static get properties(){
        return {
            listitems : {type: Array}
        }
    }

    static get styles(){
        return css `
            .check-items{
                display: flex;
                flex-direction: column;
                border: 2px solid #999;
                border-radius: 20px;
            }
            .check-item{
                margin: 10px;
                font-size: 14px;
            }
        `
    }

    constructor(){
        super();
        this.listItems = items
    }

    render(){
        return html `
            <h5>Binding Group</h5>
            <div class="check-items">
            ${this.listItems.map((item) => html `<div class="check-item"><paper-checkbox>${item}</paper-checkbox></div>`)}
            </div>
        `
    }
}

customElements.define('check-element', CheckElement)