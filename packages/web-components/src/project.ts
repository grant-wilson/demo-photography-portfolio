import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("site-project")
export class Project extends LitElement {
  @property({ type: String })
  projectId: string;

  protected override render() {
    if (this.projectId == null) {
      return html``;
    }

    return html`
      <div>
        <h1>Captivating Project Description</h1>
        <p>
          Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id
          scelerisque est ultricies ultricies. Duis est sit sed leo nisl,
          blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at
          scelerisque amet nulla purus habitasse.
        </p>
        <p>
          Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
          condimentum mi massa. In tincidunt pharetra consectetur sed duis
          facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
          dictum eget nibh tortor commodo cursus.
        </p>
        <p>
          Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet.
          Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget
          ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec
          posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
          adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere
          cursus diam.
        </p>
      </div>
      <div
        class="project-image"
        style="background-image: url('/images/${this.projectId}.png')"
      ></div>
    `;
  }

  static override styles = css`
    :host {
      padding: 112px 64px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      min-height: 75lvh;
      flex-direction: row;
      gap: 32px;
    }
    h1 {
      align-self: stretch;
      font-size: 48px;
      font-weight: 700;
      line-height: 57.6px;
      word-wrap: break-word;
    }
    p {
      // Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      word-wrap: break-word;
    }
    .project-image {
      background-size: cover;
      background-position: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "site-project": Project;
  }
}
