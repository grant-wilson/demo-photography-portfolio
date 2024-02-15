import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "@material/web/button/filled-button";

@customElement("site-cta")
export class Cta extends LitElement {
  protected override render() {
    return html`
      <div class="content">
        <header>Let's Create Something Amazing Together</header>
        <p>
          Contact us today to discuss your project and collaborate with our
          team.
        </p>
        <md-filled-button>Contact</md-filled-button>
      </div>
      <site-img></site-img>
    `;
  }

  static override styles = css`
    :host {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
      overflow: hidden;
      margin: 112px 64px;
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
    }
    header {
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 57.6px */
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "site-cta": Cta;
  }
}
