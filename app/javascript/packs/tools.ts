import HideElement from "lib/HideElement";

const t = {
	hideElement: (id: string) => {
		const el = new HideElement(id)
		el.hideElement()
	}
}

// @ts-ignore
window.t = t
