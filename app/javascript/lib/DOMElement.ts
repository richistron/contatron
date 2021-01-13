class DOMElement<SomeElement extends HTMLElement> {
  readonly id: string
  readonly el: SomeElement

  constructor(id: string) {
    this.id = id
    this.el = this.getElement()
  }

  private getElement() {
    return document.getElementById(this.id) as SomeElement
  }
}

export default DOMElement
