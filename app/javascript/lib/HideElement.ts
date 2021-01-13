import DOMElement from 'lib/DOMElement'

class HideElement extends DOMElement<HTMLDivElement> {
  readonly showClass: string = 'show'
  readonly hideClass: string = 'hide'

  hideElement(timeout = 3500) {
    let timeoutId: null | NodeJS.Timeout = null
    timeoutId = setTimeout(() => this.hide(), timeout)
    this.el.onclick = () => {
      if (timeoutId) clearTimeout(timeoutId)
      this.hide()
    }
  }

  private hide() {
    this.el.classList.remove(this.showClass)
    this.el.classList.add(this.hideClass)
  }
}

export default HideElement
