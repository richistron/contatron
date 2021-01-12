import CustomElement from "packs/lib/CustomElement";
import AlertElement from "packs/lib/AlertElement";

class Tools extends CustomElement {
	public closeAlert() {
		const el = new AlertElement(this.id)
		el.closeAlert()
	}
}

// @ts-ignore
window.Tools = Tools
