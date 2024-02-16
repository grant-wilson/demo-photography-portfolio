import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("site-footer")
export class Footer extends LitElement {
  protected override render() {
    return html`
      <div
        style="width: 100%; height: 100%; flex-direction: column; justify-content: flex-start; align-items: center; gap: 80px; display: inline-flex"
      >
        <div
          style="flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: flex"
        >
          <div
            style="flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex"
          >
            <site-logo></site-logo>
          </div>
          <div
            style="justify-content: center; align-items: flex-start; gap: 32px; display: inline-flex"
          >
            <a
              style=" font-size: 16px;  font-weight: 600; line-height: 24px; word-wrap: break-word"
              href="/contact"
            >
              Contact Us
            </a>
            <a
              style=" font-size: 16px;  font-weight: 600; line-height: 24px; word-wrap: break-word"
              href="/"
            >
              Portfolio
            </a>
          </div>
        </div>
        <div
          style="align-self: stretch; height: 54px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: flex"
        >
          <div
            style="align-self: stretch; height: 1px; background: var(--md-sys-color-on-background); border: 1px var(--md-sys-color-on-background) solid"
          ></div>
          <div
            style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex"
          >
            <div
              style=" font-size: 14px;  font-weight: 400; line-height: 21px; word-wrap: break-word"
            >
              © 2023 Example. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static override styles = css`
    :host {
      margin: 80px 0;
    }
    a {
      color: var(--md-sys-color-on-background);
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "site-footer": Footer;
  }
}
