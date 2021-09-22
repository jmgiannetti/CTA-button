import { html, css, LitElement } from 'lit';

export class CtaButton extends LitElement {
  static get styles() {
    return css`
      .button-wrapper {
        display: block;
        text-align: center;
      }
      .cta-button {
        background-color: #bf40bf;
        color: #000;
      }
      .cta-button:hover {
        background-color: #cf9fff;
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
        padding: 400px;
        color: var(--cta-button-text-color, #000);
      }
    `;
  }

  render() {
    return html`
      <div class="button-wrapper">
        <a class="button cta-button" href="https://www.twitch.tv/officialtazed"
          >Check out my channel!</a
        >
      </div>
    `;
  }
}
