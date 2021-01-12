import CustomElement from "packs/lib/CustomElement";

class AlertElement extends CustomElement {
	readonly showClass: string = 'show'
	readonly hideClass: string = 'hide'

	public closeAlert(time = 3500) {
		const timeout = setTimeout(() => this.hide(), time)
		this.el.onclick = () => {
			if (timeout) clearTimeout(timeout)
			this.hide()
		}
	}

	private hide() {
		this.el.classList.remove(this.showClass)
		this.el.classList.add(this.hideClass)
	}
}

export default AlertElement
