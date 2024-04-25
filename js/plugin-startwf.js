import { LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
//import {LitElement, html,css} from 'lit';

export class ButtonSaving extends LitElement {


    //#region Plugin contract information
    static getMetaConfig() {    
       return {
           controlName: 'plugin-custombutton',
           fallbackDisableSubmit: false,
           iconUrl: "",
           groupName: 'Actions',
           version: '2.10',
           description: 'Custom Action workflow.',
           properties: {
               workflowUrl: {
                 type: 'string',
                 title: 'Workflow URL',
                 description: 'Workflow URL with Token'
               },
               startData: {
                 type: 'string',
                 title: 'Start Data',
                 description: 'startData',
                 maxLength: 32000
               },
               Instance: {
                 type: 'string',
                 title: 'Instance',
                 description: 'instance'
               }
           }
       };
     }
     //#endregion
   
     static properties = {
      workflowUrl: {type: String },
      startData: {type: String },
      Instance: {type: String }
     };
   
     constructor() {
       super();
       this.Instance='Test'
     }
   
     updated(changedProperties)
     {
        if (changedProperties.has('Instance')) 
        {
          console.log('Instance modified ',this.Instance)
          if(this.Instance=='10')
          {
            this.startWorflow();
          }
        }
     }

     render() {
       return html`
          <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          crossorigin="anonymous"
          />
          <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
          ></script>

          <p>Welcome to the Lit tutorial!</p>
          <p>This is the ${this.version} code.</p>
          <button type="button" class="btn btn-medium nx-theme-input-1 save-button nx-theme-button-2 ng-star-inserted"          
          @click=${this.handleClick}>Click me!</button>   
       `;
     }

     startWorflow()
     {
        console.log('Start Workflow');
     }

     handleClick(e) 
     {
       this.Instance='Hello Man';
     }     
   }
   customElements.define('plugin-custombutton', ButtonSaving);
