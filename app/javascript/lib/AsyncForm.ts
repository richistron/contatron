import DOMElement from 'lib/DOMElement'

export default class AsyncForm<Response> extends DOMElement<HTMLFormElement> {
  readonly fields: string[]
  readonly success: (json: Response) => void
  readonly error: (json: Response) => void

  constructor({
    id,
    fields,
    success,
    error,
  }: {
    id: string
    fields: string[]
    success
    error
  }) {
    super(id)
    this.fields = fields
    this.success = success
    this.error = error
    this.setEventListener()
  }

  private setEventListener() {
    this.el.onsubmit = (e) => {
      e.preventDefault()
      this.sendForm()
    }
  }

  private async sendForm() {
    const response = await this.doRequest()
    const json = await response.json()
    if (response.status === 201) {
      this.success(json)
    }
    if (response.status === 401) {
      this.error(json)
    }
  }

  private getFormValues() {
    const form = new FormData(this.el)
    let values = {}
    this.fields.forEach((field) => (values[field] = form.get(field)))
    return values
  }

  private async doRequest() {
    return await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.getFormValues()),
    })
  }
}
