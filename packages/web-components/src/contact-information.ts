import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("site-contact-information")
export class ContactInformation extends LitElement {
  protected override render() {
    return html`
      <header>Contact Information</header>
      <p class="content">Feel free to reach out to us for any inquiries.</p>
      <div class="email">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.6666 5.33325H5.33329C3.86263 5.33325 2.66663 6.52925 2.66663 7.99992V23.9999C2.66663 25.4706 3.86263 26.6666 5.33329 26.6666H26.6666C28.1373 26.6666 29.3333 25.4706 29.3333 23.9999V7.99992C29.3333 6.52925 28.1373 5.33325 26.6666 5.33325ZM26.6666 7.99992V8.68125L16 16.9786L5.33329 8.68259V7.99992H26.6666ZM5.33329 23.9999V12.0586L15.1813 19.7186C15.4148 19.902 15.7031 20.0017 16 20.0017C16.2969 20.0017 16.5851 19.902 16.8186 19.7186L26.6666 12.0586L26.6693 23.9999H5.33329Z"
            fill="currentcolor"
          />
        </svg>
        <div
          style="align-self: stretch; font-size: 20px; font-weight: 700; line-height: 28px; word-wrap: break-word"
        >
          Email
        </div>
        <div
          style="align-self: stretch; font-size: 16px; font-weight: 400; line-height: 24px; word-wrap: break-word"
        >
          Send us an email
        </div>
        <a
          style="color: var(--md-sys-color-primary); align-self: stretch; font-size: 16px; font-weight: 400; text-decoration: underline; line-height: 24px; word-wrap: break-word"
          type="email"
          href="mailto:demo@example.com"
        >
          demo@example.com
        </a>
      </div>
      <div class="phone">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.6095 16.3908C23.4857 16.2668 23.3388 16.1685 23.177 16.1014C23.0153 16.0344 22.8419 15.9998 22.6668 15.9998C22.4917 15.9998 22.3183 16.0344 22.1565 16.1014C21.9948 16.1685 21.8478 16.2668 21.7241 16.3908L19.5988 18.5161C18.6135 18.2228 16.7748 17.5561 15.6095 16.3908C14.4441 15.2254 13.7775 13.3868 13.4841 12.4014L15.6095 10.2761C15.7334 10.1524 15.8317 10.0054 15.8988 9.8437C15.9659 9.68194 16.0004 9.50855 16.0004 9.33344C16.0004 9.15833 15.9659 8.98493 15.8988 8.82318C15.8317 8.66143 15.7334 8.51449 15.6095 8.39077L10.2761 3.05744C10.1524 2.93351 10.0055 2.83519 9.84371 2.76811C9.68196 2.70103 9.50856 2.6665 9.33345 2.6665C9.15834 2.6665 8.98495 2.70103 8.82319 2.76811C8.66144 2.83519 8.5145 2.93351 8.39079 3.05744L4.77479 6.67344C4.26812 7.18011 3.98279 7.87611 3.99345 8.58677C4.02412 10.4854 4.52679 17.0801 9.72412 22.2774C14.9215 27.4748 21.5161 27.9761 23.4161 28.0081H23.4535C24.1575 28.0081 24.8228 27.7308 25.3268 27.2268L28.9428 23.6108C29.0667 23.4871 29.165 23.3401 29.2321 23.1784C29.2992 23.0166 29.3337 22.8432 29.3337 22.6681C29.3337 22.493 29.2992 22.3196 29.2321 22.1578C29.165 21.9961 29.0667 21.8492 28.9428 21.7254L23.6095 16.3908ZM23.4401 25.3401C21.7761 25.3121 16.0828 24.8654 11.6095 20.3908C7.12145 15.9028 6.68679 10.1894 6.66012 8.55877L9.33345 5.88544L12.7815 9.33344L11.0575 11.0574C10.9007 11.214 10.7855 11.4072 10.7222 11.6195C10.6589 11.8318 10.6495 12.0566 10.6948 12.2734C10.7268 12.4268 11.5095 16.0628 13.7228 18.2761C15.9361 20.4894 19.5721 21.2721 19.7255 21.3041C19.9422 21.3507 20.1672 21.3421 20.3796 21.2789C20.5921 21.2158 20.7853 21.1002 20.9415 20.9428L22.6668 19.2188L26.1148 22.6668L23.4401 25.3401Z"
            fill="currentcolor"
          />
        </svg>
        <div
          style="align-self: stretch; font-size: 20px; font-weight: 700; line-height: 28px; word-wrap: break-word"
        >
          Phone
        </div>
        <div
          style="align-self: stretch; font-size: 16px; font-weight: 400; line-height: 24px; word-wrap: break-word"
        >
          Give us a call
        </div>
        <a
          style="color: var(--md-sys-color-primary); align-self: stretch; font-size: 16px; font-weight: 400; text-decoration: underline; line-height: 24px; word-wrap: break-word"
          type="tel"
          href="tel:+15550000000"
        >
          +1 (555) 000-0000
        </a>
      </div>
      <div class="address">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0001 18.6665C18.9415 18.6665 21.3335 16.2745 21.3335 13.3332C21.3335 10.3918 18.9415 7.99984 16.0001 7.99984C13.0588 7.99984 10.6668 10.3918 10.6668 13.3332C10.6668 16.2745 13.0588 18.6665 16.0001 18.6665ZM16.0001 10.6665C17.4708 10.6665 18.6668 11.8625 18.6668 13.3332C18.6668 14.8038 17.4708 15.9998 16.0001 15.9998C14.5295 15.9998 13.3335 14.8038 13.3335 13.3332C13.3335 11.8625 14.5295 10.6665 16.0001 10.6665ZM15.2268 29.0852C15.4525 29.2463 15.7229 29.333 16.0002 29.333C16.2775 29.333 16.5478 29.2463 16.7735 29.0852C17.1788 28.7985 26.7055 21.9198 26.6668 13.3332C26.6668 7.45184 21.8815 2.6665 16.0002 2.6665C10.1188 2.6665 5.33349 7.45184 5.33349 13.3265C5.29482 21.9198 14.8215 28.7985 15.2268 29.0852ZM16.0002 5.33317C20.4122 5.33317 24.0002 8.92117 24.0002 13.3398C24.0282 19.2572 18.1495 24.5705 16.0002 26.3132C13.8522 24.5692 7.97216 19.2545 8.00016 13.3332C8.00016 8.92117 11.5882 5.33317 16.0002 5.33317Z"
            fill="currentcolor"
          />
          <path
            d="M16.0001 18.6665C18.9415 18.6665 21.3335 16.2745 21.3335 13.3332C21.3335 10.3918 18.9415 7.99984 16.0001 7.99984C13.0588 7.99984 10.6668 10.3918 10.6668 13.3332C10.6668 16.2745 13.0588 18.6665 16.0001 18.6665ZM16.0001 10.6665C17.4708 10.6665 18.6668 11.8625 18.6668 13.3332C18.6668 14.8038 17.4708 15.9998 16.0001 15.9998C14.5295 15.9998 13.3335 14.8038 13.3335 13.3332C13.3335 11.8625 14.5295 10.6665 16.0001 10.6665ZM15.2268 29.0852C15.4525 29.2463 15.7229 29.333 16.0002 29.333C16.2775 29.333 16.5478 29.2463 16.7735 29.0852C17.1788 28.7985 26.7055 21.9198 26.6668 13.3332C26.6668 7.45184 21.8815 2.6665 16.0002 2.6665C10.1188 2.6665 5.33349 7.45184 5.33349 13.3265C5.29482 21.9198 14.8215 28.7985 15.2268 29.0852ZM16.0002 5.33317C20.4122 5.33317 24.0002 8.92117 24.0002 13.3398C24.0282 19.2572 18.1495 24.5705 16.0002 26.3132C13.8522 24.5692 7.97216 19.2545 8.00016 13.3332C8.00016 8.92117 11.5882 5.33317 16.0002 5.33317Z"
            fill="currentcolor"
          />
        </svg>
        <div
          style="align-self: stretch; font-size: 20px; font-weight: 700; line-height: 28px; word-wrap: break-word"
        >
          Office
        </div>
        <div
          style="align-self: stretch; font-size: 16px; font-weight: 400; line-height: 24px; word-wrap: break-word"
        >
          6th St. & Independence Ave., SW Washington, DC
        </div>
        <div
          style="align-self: stretch; height: 40px; padding-top: 16px; flex-direction: column; justify-content: flex-start; align-items: flex-start; gap: 8px; display: flex"
        >
          <div
            style="justify-content: center; align-items: center; gap: 8px; display: inline-flex"
          >
            <a
              style="color: var(--md-sys-color-primary);font-size: 16px; font-weight: 400; line-height: 24px; word-wrap: break-word"
              href="https://maps.app.goo.gl/D6kSA3xVkssPZ8S26"
            >
              Get Directions
            </a>
            <div style="width: 24px; height: 24px; position: relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.70697 16.9496L15.414 11.2426L9.70697 5.53564L8.29297 6.94964L12.586 11.2426L8.29297 15.5356L9.70697 16.9496Z"
                  fill="currentcolor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d923.2966895281448!2d-77.02061046382558!3d38.88767838160929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b78312520a53%3A0x36fc6a2d9f346790!2sIndependence%20Ave%20SW%20%26%206th%20St%20SW%2C%20Washington%2C%20DC%2020004!5e0!3m2!1sen!2sus!4v1708106426974!5m2!1sen!2sus"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    `;
  }

  static override styles = css`
    :host {
      display: grid;
      grid: "header img" "content img" "email img" "phone img" "address img" / 1fr 1fr;
      margin: 6rem 0;
      gap: 1rem;
    }
    header {
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 57.6px */
      grid-area: header;
    }
    .content {
      grid-area: content;
    }
    .email {
      grid-area: email;
    }
    .phone {
      grid-area: phone;
    }
    .address {
      grid-area: address;
    }
    iframe {
      grid-area: img;
    }
    .contact-info {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "site-contact-information": ContactInformation;
  }
}
