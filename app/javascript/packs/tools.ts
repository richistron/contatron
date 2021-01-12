// Run this example by adding <%= javascript_pack_tag 'hello_typescript' %> to the head of your layout file,
// like app/views/layouts/application.html.erb.

class Tools {
	readonly showClass = 'show'
	readonly hideClass = 'hide'
	readonly id: string

	constructor(id: string) {
		this.id = id
	}

	closeAlert() {
		const element = this.getElement()
		element.onclick = () => {
			element.classList.remove(this.showClass)
			element.classList.add(this.hideClass)
		}
	}

	getElement(): HTMLElement {
		return document.getElementById(this.id)
	}

	debug() {
		console.log(this.getElement())
	}
}

// @ts-ignore
window.Tools = Tools
