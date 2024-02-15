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
            <div
              style="color: black; font-size: 16px;  font-weight: 600; line-height: 24px; word-wrap: break-word"
            >
              Contact Us
            </div>
            <div
              style="color: black; font-size: 16px;  font-weight: 600; line-height: 24px; word-wrap: break-word"
            >
              Portfolio
            </div>
          </div>
        </div>
        <div
          style="align-self: stretch; height: 54px; flex-direction: column; justify-content: flex-start; align-items: center; gap: 32px; display: flex"
        >
          <div
            style="align-self: stretch; height: 1px; background: black; border: 1px black solid"
          ></div>
          <div
            style="align-self: stretch; justify-content: space-between; align-items: flex-start; display: inline-flex"
          >
            <div
              style="color: black; font-size: 14px;  font-weight: 400; line-height: 21px; word-wrap: break-word"
            >
              © 2023 Example. All rights reserved.
            </div>
            <div
              style="justify-content: flex-start; align-items: flex-start; gap: 24px; display: flex"
            >
              <div
                style="color: black; font-size: 14px;  font-weight: 400; text-decoration: underline; line-height: 21px; word-wrap: break-word"
              >
                Cookie Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static override styles = css`
    :host {
      margin: 80px 64px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "site-footer": Footer;
  }
}
