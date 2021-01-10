import { setCookie } from '../src/common/utils/cookies'
import { useEffect } from 'react'
import { redirectTo } from '../src/common/utils/utils'

const SSOLogin = ({ ssoToken }) => {
  useEffect(() => {
    setCookie('ssoToken', ssoToken)
    if (ssoToken) {
      redirectTo('/admin')
    }
  }, [ssoToken])
  return (
    <div />
  )
}

SSOLogin.getInitialProps = ({ req, res, store, ...rest }) => {
  const ssoToken = req.query.token_sso
  return {
    ssoToken
  }
}

export default SSOLogin
