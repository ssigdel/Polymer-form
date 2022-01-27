import '@polymer/paper-card';
import { css, html, LitElement } from 'lit';

class MainElement extends LitElement{

    static get styles(){
        return css`
        :host{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container{
            margin: 20px;
        }
        .input-container{
            display: flex;
        }
        .header{
            display: flex;
        }
        
        
        `
    }

    constructor(){
        super();
    }

    render(){
        return html `
        <paper-card>
        <div class="container">
          
            <div class="header">
                <h3>Create Binding Group</h3>
            </div>
            <div class="input-container">
                <input-element label="Name"></input-element>
                <input-element label="Ligands Promoted"></input-element>
            </div>
            <div class="input-container">
                <input-element label="Description"></input-element>
                <input-element label="Total Ligands in Binding Group"></input-element>
            </div>
            <div>
                <date-element></date-element>
            </div>
            <div>
                <check-element></check-element>
            <div>
            <div>
                <text-element></text-element>
            </div>
            <button-element></button-element>
        </div>
        </paper-card>
        `
    }
}

customElements.define('main-element', MainElement)