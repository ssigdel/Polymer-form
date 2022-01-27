import '@polymer/paper-checkbox/paper-checkbox';
import { css, html, LitElement } from 'lit';

class CheckElement extends LitElement{
    static get properties(){
        return {
            listitems : {type: Array}
        }
    }

    static get styles(){
        return css `
            h5{
                color: #a5a5a5;
            }
            .check-items{
                display: flex;
                flex-direction: column;
                border: 2px solid #999;
                border-radius: 20px;
                height: 100px;
                overflow-y: scroll;
            }
            .check-items::-webkit-scrollbar{
                display: none;
            }
            .check-item{
                padding: 10px;
            }
            .check-item:nth-child(odd){
                background-color: #f3f3f3;
            }
            .check-item{
                margin: 5px;
                font-size: 14px;
            }
        `
    }

    constructor(){
        super();
        this.listItems = []
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