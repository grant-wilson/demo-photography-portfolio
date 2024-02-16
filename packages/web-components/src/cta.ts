import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "@material/web/button/filled-button";

@customElement("site-cta")
export class Cta extends LitElement {
  protected override render() {
    return html`
      <header>Let's Create Something Amazing Together</header>
      <p class="content">
        Contact us today to discuss your project and collaborate with our team.
      </p>
      <md-filled-button href="contact">Contact</md-filled-button>
      <site-img src="create.jpg"></site-img>
    `;
  }

  static override styles = css`
    :host {
      display: grid;
      overflow: hidden;
      grid: "header" "img" "content" "button";
      grid-auto-rows: min-content;
      grid-template-rows: auto;
      margin: 112px 8px;
    }
    @media screen and (min-width: 768px) {
      :host {
        grid: "header img" auto "content img" auto "button img" auto ". img" 1fr / 1fr 1fr;
        grid-auto-rows: min-content;
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
      }
    }
    header {
      font-size: 2rem;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 57.6px */
      grid-area: header;
      text-align: center;
    }
    @media screen and (min-width: 768px) {
      header {
        font-size: 3rem;
        text-align: start;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      align-items: flex-start;
      grid-area: content;
    }
    md-filled-button {
      grid-area: button;
    }
    @media screen and (min-width: 768px) {
      md-filled-button {
        justify-self: start;
        width: min-content;
      }
    }
    site-img {
      grid-area: img;
      height: 4in;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "site-cta": Cta;
  }
}
