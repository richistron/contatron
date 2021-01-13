import onLoad from 'lib/onLoad'
import AsyncForm from 'lib/AsyncForm'
import ShowAlert from 'lib/ShowAlert'

interface ResponseShape {
  error?: string
  user?: boolean
}

onLoad(() => {
  new AsyncForm<ResponseShape>({
    id: 'login-form',
    url: '/login',
    fields: ['authenticity_token', 'email', 'password'],
    success: () => ((window as any).location = '/'),
    error: ({ error = '' }) => new ShowAlert('login-error', error),
  })
})
