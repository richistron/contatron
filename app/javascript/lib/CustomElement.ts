
class CustomElement {
	readonly id: string
	readonly el: HTMLElement

	constructor(id: string) {
		this.id = id
		this.el = this.getElement()
	}

	private getElement(): HTMLElement {
		return document.getElementById(this.id)
	}
}


export default CustomElement
