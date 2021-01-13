import DOMElement from 'lib/DOMElement'

class ToggleShowHide extends DOMElement<HTMLDivElement> {
  readonly showClass: string = 'show'
  readonly hideClass: string = 'hide'

  constructor(id, close?: boolean) {
    super(id)
    if (close) this.hideElement()
  }

  hideElement(timeout = 3500) {
    let timeoutId: null | NodeJS.Timeout = null
    timeoutId = setTimeout(() => this.hide(), timeout)
    this.el.onclick = () => {
      if (timeoutId) clearTimeout(timeoutId)
      this.hide()
    }
  }

  hide() {
    this.el.classList.remove(this.showClass)
    this.el.classList.add(this.hideClass)
  }

  show() {
    this.el.classList.remove(this.hideClass)
    this.el.classList.add(this.showClass)
  }
}

export default ToggleShowHide
