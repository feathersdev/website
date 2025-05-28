import { createApp, h, onMounted, ref, watch } from 'vue'

export default {
  name: 'RenderToIFrame',
  props: {
    classes: { type: String },
    iframeClasses: { type: String },
    theme: { type: String },
  },
  setup(props: any, { slots }: any) {
    const iframeRef = ref()
    const iframeBody = ref()
    const iframeHead = ref()
    const iframeStyle = ref()

    onMounted(() => {
      iframeBody.value = iframeRef.value.contentDocument.body
      iframeHead.value = iframeRef.value.contentDocument.head
      const el = document.createElement('div')
      iframeBody.value.appendChild(el)
      iframeStyle.value = document.createElement('style')
      iframeStyle.value.innerHTML = props.css
      iframeHead.value.appendChild(iframeStyle.value)

      createApp({
        name: 'IframeRender',
        setup() {
          const script = iframeRef.value.contentDocument.createElement('script')
          script.type = 'text/javascript'
          // create dynamic script
          script.text = `const oHead = document.getElementsByTagName('head')[0]
            const arrStyleSheets = parent.document.getElementsByTagName('style')
            for (let i = 0; i < arrStyleSheets.length; i++)
            oHead.appendChild(arrStyleSheets[i].cloneNode(true))
          `

          if (props.iframeClasses.length)
            iframeRef.value.classList.add(props.iframeClasses)
          iframeBody.value.classList.add('p-6')
          iframeHead.value.appendChild(script)

          watch(() => props.theme, (theme) => {
            iframeBody.value.setAttribute('data-theme', theme)
          }, { immediate: true })
          return () => slots.default()
        },
      }).mount(el)
    })
    return () => h('iframe', {
      ref: iframeRef,
    })
  },
}
