import { LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
//import { LitElement, html, css } from 'lit';

export class NACDemoo extends LitElement {

    //#region Plugin contract information
    static getMetaConfig() {    
      return {
          controlName: 'plugin-startwf',
          fallbackDisableSubmit: false,
          iconUrl: "",
          groupName: 'Actions',
          version: '6.10',
          description: 'Async workflow.',
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
              instance: {
                type: 'string',
                title: 'instance',
                description: 'instance'
               // isValueField: true
              }
          },
          events: ["ntx-value-change"],
          standardProperties: {
              fieldLabel: true,
              description: true
          }
      };
    }
    //#endregion
  
  static properties = {
    workflowUrl: { type: String },
    startData: { type: String },
    instance: { type: String }
  };

  constructor() {
    super();
    this.instance='Test'
  }

  updated(changedProperties)
  {
     if (changedProperties.has('instance')) 
     {
       console.log('instance modified ',this.instance)
       if(this.instance=='10')
       {
         this.startWorflow();
       }
     }
  }
  constructor() {
    super();
    this.isStarting = false;
  }

  async connectedCallback() {
    super.connectedCallback();
  }

  static styles = css`
    :host {
      display: block;
    }
    .button {
    /*  background-color: var(-ntx-form-theme-color-primary) */
    background-color: #006BD6;
    color: #FFFFFF;
    border-color: #006BD6;
    font-family: "Open Sans", "Helvetica", "Arial", sans-serif;
    font-size: 14px;
    border-radius: 4px;
    }
  `;

onChange(e) {
  const args = {
      bubbles: true,
      cancelable: false,
      composed: true,
      // value coming from input change event. 
      detail: e.target.value,
  };
  const event = new CustomEvent('ntx-value-change', args);
  this.dispatchEvent(event);
}

//#region Functions


//#endregion

//#region Rendering
render() {
  const saveButton = this.workflowUrl ? html`
    <button class="button" @click=${this.startWorkflow}>
          Save                     
    </button>
  ` : ``;
  
  return html`
    ${saveButton}<p>123</p>
  `;
}

startWorkflow() {
  const apiURL = this.workflowUrl;

  fetch(this.workflowUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'text/plain'
    },
    body: this.startData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error starting Workflow');
    }
    return response.json();
  })
  .then(data => {
    this.responseMessage = `Start Workflow Successful: ${JSON.stringify(data)}`;  
  })
  .catch(error => {
    this.responseMessage = `Start Workflow Failed: ${error.message}`;
  });
}

handleClick(e) 
{
  this.instance='Hello Man';
}     
//#endregion
  
}

customElements.define('plugin-startwf', NACDemoo);
