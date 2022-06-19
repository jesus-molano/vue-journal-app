import store from '@/store'

const isAuthenticatedGuard = async (to, from, next) => {
  const { ok } = await store.dispatch('auth/checkAuthentication')
  if (ok) return next()
  next({ name: 'login' })
}
export default isAuthenticatedGuard
