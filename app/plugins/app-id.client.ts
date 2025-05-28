const ONE_DAY = 24 * 60 * 60 * 1000

function getAppId() {
  const urlParams = new URLSearchParams(window.location.search)
  const urlAppId = urlParams.get('appId')

  console.log('appId', urlAppId)

  if (urlAppId && urlAppId.startsWith('did:key:')) {
    localStorage.setItem('appId', urlAppId)
    localStorage.setItem('lastAccess', Date.now().toString())
  }

  const lastAccess = Number.parseInt(localStorage.getItem('lastAccess') || '0')

  // Check if lastAccess was more than 1 day ago, we don't want to store appId longer than that
  if (lastAccess + ONE_DAY < Date.now()) {
    localStorage.removeItem('appId')
    localStorage.removeItem('lastAccess')
  }

  return localStorage.getItem('appId') || null
}

export default defineNuxtPlugin(() => {
  const router = useRouter()
  
  router.afterEach(async () => {
    await nextTick()

    function updatePage() {
      const appId = getAppId()
      
      if (appId) {
        document.body.querySelectorAll('span').forEach((el) => {
          // Process only direct text nodes, not text in child elements
          for (const node of el.childNodes) {
            if (node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.includes('<your-app-id>')) {
              node.textContent = node.textContent.replace(/<your-app-id>/g, appId);
            }
          }
        })
      }
    }

    updatePage()

    const nuxtApp = useNuxtApp()
    nuxtApp.hook('page:finish', () => {
      updatePage()
    })
  })
})
