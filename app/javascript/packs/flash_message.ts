import onLoad from "lib/onLoad";
import HideElement from "lib/HideElement";

onLoad(() => {
  const el = new HideElement('flash-message-alert')
  el.hideElement()
})
