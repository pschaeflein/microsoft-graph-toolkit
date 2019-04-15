import { LitElement, customElement, html, property } from "lit-element";
import { styles } from "./mgt-dot-options-css";

@customElement("mgt-dot-options")
export class MgtDotOptions extends LitElement {
  public static get styles() {
    return styles;
  }

  @property({ type: Function })
  public options: () => {
    [option: string]: (e: MouseEvent) => void | any;
  } = null;

  @property({ type: Array })
  public disabled: string[] = [];

  @property({ type: Boolean })
  public menuOpen: boolean = false;

  public constructor() {
    super();
    window.addEventListener("click", e => (this.menuOpen = false));
  }

  private onDotClick(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    this.menuOpen = !this.menuOpen;
  }

  public render() {
    return html`
      <div class="DotMenu ${this.menuOpen ? "Open" : ""}">
        <span class="DotIcon" @click=${e => this.onDotClick(e)}>
          \uE712
        </span>
        ${!this.menuOpen
          ? null
          : html`
              <div class="Menu">
                ${this.getMenuOptions()}
              </div>
            `}
      </div>
    `;
  }

  public getMenuOptions() {
    let ret = [];
    for (let prop in this.options)
      ret.push(this.getMenuOption(prop, this.options[prop]));

    return ret;
  }
  public getMenuOption(name: string, click: (e: MouseEvent) => void | any) {
    return html`
      <div
        class="DotItem"
        @click="${e => {
          e.preventDefault();
          e.stopPropagation();
          click(e);
          this.menuOpen = false;
        }}"
      >
        <span class="DotItemName">
          ${name}
        </span>
      </div>
    `;
  }
}
