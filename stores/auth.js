import { defineStore } from 'pinia'
import Cookies from 'js-cookie'
import _ from 'lodash'

const cookieTokenName = 'token'
const cookieTokenExpiredName = 'token_expired'
const cookieType = 'type'
const cookieUserName = 'user'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    tdk: {},
    type: 0,
    info: {},
    token: '',
    tokenExpired: 0,
    user: {}
  }),
  actions: {
    SET_TOKEN (token) {
      token = token || ''
      this.token = token
      if (token && import.meta.client) {
        Cookies.set(cookieTokenName, token)
      }
    },
    SET_TYPE (type) {
      type = type || 0
      this.type = type
      if (import.meta.client) {
        Cookies.set(cookieType, type)
      }
    },
    SET_TOKEN_EXPIRED (expired) {
      this.tokenExpired = expired
      if (expired && import.meta.client) {
        Cookies.set(cookieTokenExpiredName, expired)
      }
    },
    SET_USER (user) {
      user = user || {}
      this.user = _.isObject(user) ? user : JSON.parse(user)
      if (user && import.meta.client) {
        Cookies.set(cookieUserName, JSON.stringify(this.user))
      }
    },
    SET_INFO (info) {
      info = info || {}
      this.info = _.isObject(info) ? info : JSON.parse(info)
      if (import.meta.client) {
        Cookies.set('info', JSON.stringify(this.info))
      }
    },
    // Hydrate auth state from cookies on the client (replaces nuxtClientInit).
    loadFromCookies () {
      if (!import.meta.client) return
      const token = Cookies.get(cookieTokenName)
      const expired = Cookies.get(cookieTokenExpiredName)
      const user = Cookies.get(cookieUserName)
      if (token) this.SET_TOKEN(token)
      if (expired) this.SET_TOKEN_EXPIRED(expired)
      if (user) this.SET_USER(user)
    }
  }
})
