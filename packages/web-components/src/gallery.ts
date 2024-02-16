import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import "@material/web/chips/filter-chip";
import "@material/web/focus/md-focus-ring";
import "@material/web/elevation/elevation";
import "@material/web/button/outlined-button";
import "@appnest/masonry-layout";

@customElement("site-gallery")
export class Gallery extends LitElement {
  @property({ type: Array })
  projects: { path: string; name: string }[] = [];

  @state()
  showing = 1;

  @state()
  loading = false;

  private loadMore() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.showing += 1;
    }, 1000);
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

    return html`
      <header>Portfolio Gallery</header>
      <ul>
        <li><md-filter-chip label="Coffee"></md-filter-chip></li>
        <li><md-filter-chip label="Nature"></md-filter-chip></li>
        <li><md-filter-chip label="Things"></md-filter-chip></li>
      </ul>
      <masonry-layout cols="2">
        ${projectGroups.map(
          (projects) => html`
            ${projects.map(
              (project, i) => html`
                <a
                  href="projects/${project.name}"
                  class="project-card"
                  style="height: ${(i % 3) + 2}in;"
                  aria-label="${project.name}"
                >
                  <div
                    class="project-image"
                    style="background-image: url('${project.path}');"
                  ></div>
                </a>
              `
            )}
          `
        )}
      </masonry-layout>
      <md-outlined-button @click=${() => this.loadMore()}
        >${this.loading ? "Loading..." : "Load More"}</md-outlined-button
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
    masonry-layout {
      align-self: stretch;
      width: 100%;
    }
    .project-card {
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: thin solid var(--md-sys-color-on-primary);
      position: relative;
      width: 100%;
    }
    .project-card {
      --md-elevation-level: 0;
      transition-duration: 250ms;
      transition-timing-function: ease-in-out;
    }
    /* .project-card:nth-child(2n + 1) {
      height: 2in;
    }
    .project-card:nth-child(2n) {
      height: 3in;
    } */
    .project-card > a:hover {
      --md-elevation-level: 2;
    }
    .project-image {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      position: relative;
      width: 100%;
      height: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "site-gallery": Gallery;
  }
}
