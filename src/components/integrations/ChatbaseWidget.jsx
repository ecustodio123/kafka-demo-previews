import { useEffect } from 'react'

const defaultChatbaseChatbotId = 'fGm4mFb5kvQ1Rop0kTOYe'
const chatbaseDomain = 'www.chatbase.co'
const chatbaseEmbedUrl = 'https://www.chatbase.co/embed.min.js'

let chatbaseLoadRequested = false

function prepareChatbaseQueue() {
  if (window.chatbase && window.chatbase('getState') === 'initialized') {
    return
  }

  window.chatbase = (...args) => {
    window.chatbase.q = window.chatbase.q || []
    window.chatbase.q.push(args)
  }

  window.chatbase = new Proxy(window.chatbase, {
    get(target, prop) {
      if (prop === 'q') {
        return target.q
      }

      return (...args) => target(prop, ...args)
    },
  })
}

function appendChatbaseScript(chatbotId) {
  if (document.getElementById(chatbotId)) {
    return
  }

  const script = document.createElement('script')
  script.src = chatbaseEmbedUrl
  script.id = chatbotId
  script.domain = chatbaseDomain
  script.setAttribute('domain', chatbaseDomain)
  document.body.appendChild(script)
}

export function ChatbaseWidget() {
  useEffect(() => {
    const chatbotId = import.meta.env.VITE_CHATBASE_CHATBOT_ID || defaultChatbaseChatbotId

    if (!chatbotId || chatbaseLoadRequested || document.getElementById(chatbotId)) {
      return
    }

    chatbaseLoadRequested = true
    prepareChatbaseQueue()

    const onLoad = () => appendChatbaseScript(chatbotId)

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad, { once: true })
    }
  }, [])

  return null
}
