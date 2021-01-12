
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

	disableClick(): void {
		this.el.onclick = (e) => e.preventDefault()
	}

	debug(): void {
		console.log(this.el)
	}
}


export default CustomElement
