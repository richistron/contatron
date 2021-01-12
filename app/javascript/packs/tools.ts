// Run this example by adding <%= javascript_pack_tag 'hello_typescript' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

class Tools {
	readonly showClass = 'show'
	readonly hideClass = 'hide'
	readonly id: string

	constructor(id: string) {
		this.id = id
	}

	closeAlert(time = 3500) {
		const element = this.getElement()

		const hide = () => {
			element.classList.remove(this.showClass)
			element.classList.add(this.hideClass)
		}

		const timeout = setTimeout(() => hide(), time)

		element.onclick = () => {
			if (timeout) clearTimeout(timeout)
			hide()
		}
	}

	getElement(): HTMLElement {
		return document.getElementById(this.id)
	}

	disableClick() {
		this.getElement().onclick = (e) => e.preventDefault()
	}

	debug() {
		console.log(this.getElement())
	}
}

// @ts-ignore
window.Tools = Tools
