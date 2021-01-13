import onLoad from 'lib/onLoad'
import AsyncForm from 'lib/AsyncForm'
import DOMElement from 'lib/DOMElement'

interface ResponseShape {
  error?: string
  user?: boolean
}

class ShowAlert extends DOMElement<HTMLDivElement> {
  readonly response: ResponseShape
  readonly hide = 'hide'
  readonly show = 'show'

  constructor(id: string, response: ResponseShape) {
    super(id)
    this.response = response
    this.showError()
  }

  private showError() {
    console.log(this.el.innerHTML)
    this.el.innerHTML = this.response.error || ''
    this.el.classList.remove(this.hide)
    this.el.classList.add(this.show)
  }
}

onLoad(() => {
  new AsyncForm<ResponseShape>({
    id: 'login-form',
    fields: ['authenticity_token', 'email', 'password'],
    success: () => ((window as any).location = '/'),
    error: (error) => new ShowAlert('login-error', error),
  })
})
