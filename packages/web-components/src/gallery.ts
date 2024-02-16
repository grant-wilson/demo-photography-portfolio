import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import "@material/web/chips/filter-chip";
import "@material/web/focus/md-focus-ring";
import "@material/web/elevation/elevation";
import "@material/web/button/outlined-button";

@customElement("site-gallery")
export class Gallery extends LitElement {
  @property({ type: Array<String> })
  projects: string[] = [];

  @state()
  showing = 1;

  private loadMore() {
    this.showing += 1;
  }

  protected override render() {
    const projectGroups = [];
    for (
      let i = 0;
      i < this.projects.length && projectGroups.length < this.showing;
      i += 4
    ) {
      projectGroups.push(this.projects.slice(i, i + 4));
    }

    // ${projectGroups.map(
    //   (projects, i) => html`
    //     <div class="container container-${(i % 2) + 1}">
    //       ${projects.map(
    //         (project) => html`
    //           <a href="/projects/${project}" class="project-link">
    //             <md-focus-ring
    //               style="--md-focus-ring-shape: 8px"
    //             ></md-focus-ring>
    //             <md-elevation></md-elevation>
    //             <div
    //               class="project-image"
    //               style="background-image: url('/images/${project}.png');"
    //             ></div>
    //           </a>
    //         `
    //       )}
    //     </div>
    //   `
    // )}

    return html`
      <header>Portfolio Gallery</header>
      <ul>
        <li><md-filter-chip label="Photography"></md-filter-chip></li>
        <li><md-filter-chip label="Painting"></md-filter-chip></li>
        <li><md-filter-chip label="Sculpture"></md-filter-chip></li>
      </ul>

      <md-outlined-button @click=${() => this.loadMore()}
        >Load More</md-outlined-button
      >
    `;
  }

  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      margin-top: 32px;
      align-items: center;
      gap: 16px;
      color: var(--md-sys-color-on-background);
    }

    * {
      box-sizing: border-box;
    }

    header {
      text-align: center;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%;
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 32px;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .container {
      align-self: stretch;
      column-count: 1;
      --container-gap: 4px;
    }
    @media screen and (min-width: 481px) {
      .container {
        --container-gap: 8px;
        column-count: 2;
        height: 800px;
      }
    }
    @media screen and (min-width: 769px) {
      .container {
        --container-gap: 16px;
      }
    }
    .container-1 > .project-link:nth-child(1) {
      height: calc((1000px - var(--container-gap)) / 4 * 2);
    }
    .container-1 > .project-link:nth-child(2) {
      height: calc((1000px - var(--container-gap)) / 4);
    }
    .container-1 > .project-link:nth-child(3) {
      height: calc((1000px - var(--container-gap)) / 4);
    }
    .container-1 > .project-link:nth-child(4) {
      height: calc((1000px - var(--container-gap)) / 4 * 2);
    }
    .container-2 > .project-link:nth-child(1) {
      height: calc((1000px - var(--container-gap)) / 4);
    }
    .container-2 > .project-link:nth-child(2) {
      height: calc((1000px - var(--container-gap)) / 4 * 2);
    }
    .container-2 > .project-link:nth-child(3) {
      height: calc((1000px - var(--container-gap)) / 4 * 2);
    }
    .container-2 > .project-link:nth-child(4) {
      height: calc((1000px - var(--container-gap)) / 4);
    }
    .container .project-image {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: relative;
      width: 100%;
      height: 100%;
    }
    .container > a {
      --md-elevation-level: 0;
      transition-duration: 250ms;
      transition-timing-function: ease-in-out;
      margin: var(--container-gap);
    }
    .container > a:hover {
      --md-elevation-level: 2;
    }
    .project-link {
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: thin solid var(--md-sys-color-on-primary);
      position: relative;
      width: 100%;
      display: inline-block;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "site-gallery": Gallery;
  }
}
