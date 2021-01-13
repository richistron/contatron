import DOMElement from 'lib/DOMElement'

export default class AsyncForm<Response> extends DOMElement<HTMLFormElement> {
  readonly fields: string[]
  readonly success: (json: Response) => void
  readonly error: (json: Response) => void
  readonly url: string

  constructor({
    id,
    fields,
    success,
    error,
    url,
  }: {
    id: string
    fields: string[]
    success
    error
    url: string
  }) {
    super(id)
    this.fields = fields
    this.success = success
    this.error = error
    this.url = url
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
    return await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.getFormValues()),
    })
  }
}
