import DOMElement from 'lib/DOMElement'
import ToggleShowHide from 'lib/ToggleShowHide'

export default class ShowAlert extends DOMElement<HTMLDivElement> {
  readonly error: string

  constructor(id: string, error: string) {
    super(id)
    this.error = error
    this.showError()
  }

  private showError() {
    this.el.innerHTML = this.error
    new ToggleShowHide(this.id, true).show()
  }
}
