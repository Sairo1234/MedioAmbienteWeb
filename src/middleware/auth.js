import { useSessionStore } from '@/store/session'

export default function isLogged(to) {
  const sessionStore = useSessionStore()
  if(!sessionStore.isLogged && to.name !== "login") return { name: "login" } //name of the route on router/index.js
}