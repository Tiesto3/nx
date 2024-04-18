import { LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
//import { LitElement, html, css } from 'lit';

export class NACDemo extends LitElement {

    //#region Plugin contract information
    static getMetaConfig() {    
      return {
          controlName: 'NAC Async Workflow',
          fallbackDisableSubmit: false,A
          iconUrl: "",
          groupName: 'Actions',
          version: '1.0',
          description: 'Async workflow.',
          properties: {
              workflowUrl: {
                type: 'string',
                title: 'Workflow URL',
                description: 'Workflow 3333 URL with Token'
              },
              startData: {
                type: 'string',
                title: 'Start Data',
                description: 'startData',
                maxLength: 32000
              },
              value: {
                type: 'string',
                title: 'Instance',
                description: 'instance',
                isValueField: true
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
      background-color: var(--ntx-form-theme-color-primary);
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

//#endregion

//#region Rendering
render() {
  const saveButton = this.workflowUrl ? html`
    <button class="nx-button" @click=${this.startWorkflow}>
          Start Workflow                     
    </button>
  ` : ``;
  
  return html`
    ${saveButton}<p>abcd</p>
  `;
}
//#endregion
  
}

customElements.define('plugin-demo', NACDemo);
