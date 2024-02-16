import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "@material/web/button/text-button";
import "@material/web/iconbutton/icon-button";
import "@material/web/icon/icon";

@customElement("site-nav")
export class Nav extends LitElement {
  @state()
  theme = document.body.classList.contains("dark") ? "dark" : "light";

  private setTheme() {
    this.theme = document.body.classList.contains("dark") ? "light" : "dark";

    if (this.theme == "dark") {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", this.theme);
  }

  protected override render() {
    return html`
      <site-logo></site-logo>
      <span style="flex-grow: 1;"></span>
      <md-icon-button @click=${() => this.setTheme()}
        ><md-icon
          >${this.theme == "light" ? "dark_mode" : "light_mode"}</md-icon
        ></md-icon-button
      >
      <md-text-button href="/">Portfolio</md-text-button>
      <md-text-button href="/contact">Contact</md-text-button>
    `;
  }

  static override styles = css`
    :host {
      display: flex;
      height: 72px;
      align-items: center;
      flex-direction: row;
      gap: 8px;
    }
    @media screen and (min-width: 481px) {
      :host {
        gap: 16px;
      }
    }
    @media screen and (min-width: 769px) {
      :host {
        gap: 32px;
      }
    }
    a {
      text-decoration: none;
      display: block;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
    }

    a:hover {
      text-decoration: underline;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "site-nav": Nav;
  }
}
