import { html, css, LitElement } from 'lit';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      .button-wrapper {
        display: block;
        text-align: center;
      }
      .cta-button {
        background-color: #a3f;
        color: #000;
      }
      .cta-button:hover {
        background-color: #f1b;
      }
      .button {
        border: none;
        border-radius: 3em;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
        display: inline block;
        font-size: 1em;
        padding: 1em 2em;
        width: auto;
      }
      :host {
        display: block;
        padding: 25px;
        color: var(--cta-button-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
  }

  render() {
    return html`
      <div class="button-wrapper">
        <a class="button cta-button" href="https://www.twitch.tv/officialtazed"
          >Click Here</a
        >
      </div>
    `;
  }
}
