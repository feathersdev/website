<script setup lang="ts">
import { useData } from 'vitepress'
import { onBeforeUnmount, onMounted } from 'vue'
import Pricing from '../components/Pricing.vue'

const { isDark } = useData()

const toggleHomeClass = () => document.getElementById('app')?.classList.toggle('home-page')

onMounted(toggleHomeClass)
onBeforeUnmount(toggleHomeClass)
</script>

<template>
  <div class="auth-landing-page">
    <div class="bg-stars">
      <div class="home-hero mx-auto max-w-7xl px-4 relative">
        <div class="grid grid-cols-1 md:grid-cols-2 py-24">
          <div class="flex flex-col max-w-4xl md:mt-10 mx-auto pr-1/12 gap-6">
            <h1 class="text-4xl sm:text-6xl text-primary brightness-120">
              Auth for Builders, Not Bureaucrats
            </h1>
            <p class="text-balance text-xl sm:text-2xl">
              <!-- Feathers Cloud Auth is secure, scalable and developer-friendly. -->
              Developer-friendly email logins for your web applications.
            </p>
            <div class="flex flex-col sm:flex-row justify-start items-start gap-4">
              <a href="https://app.feathers.cloud" class="btn btn-primary btn-xl">Get Started</a>
              <a href="/auth/" class="btn btn-xl text-primary border border-primary border-solid">Documentation</a>
            </div>
          </div>

          <div class="flex flex-col items-center justify-center py-14 md:py-0">
            <a href="https://app.feathers.cloud" class="flex-1">
              <img
                src="https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/970b7815-2177-46a3-f73f-c77788cd4500/public"
                alt="Feathers Cloud Auth Login Screen"
                class="w-96 shadow-xl"
              >
            </a>
          </div>
        </div>
      </div>

      <!-- Logos -->
      <div class="logos flex flex-col py-24 px-4 md:px-10 text-center bg-[#1c1735]/60 relative" role="region" aria-labelledby="auth-description">
        <p id="auth-description" class="text-balance text-xl mb-4">
          Secure and scalable authentication for NodeJS, Deno, Bun, Cloudflare Workers and local-first web-applications
        </p>
        <div class="mx-auto max-w-2xl lg:max-w-7xl" role="list" aria-label="Supported platforms">
          <div class="flex flex-wrap items-center justify-evenly mx-auto gap-y-4 gap-4 md:gap-8 lg:gap-16 mt-4 lg:mt-0">
            <a href="/auth/platforms/nodejs" class="border border-solid border-white/25 rounded-xl px-4 py-2 block transition-colors duration-200 hover:bg-white/10 flex items-center gap-3" role="listitem" aria-label="Use Cloud Auth with NodeJS">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#83cd29" d="M16 30a2.15 2.15 0 0 1-1.076-.288L11.5 27.685c-.511-.286-.262-.387-.093-.446a6.8 6.8 0 0 0 1.549-.7a.26.26 0 0 1 .255.019l2.631 1.563a.34.34 0 0 0 .318 0l10.26-5.922a.32.32 0 0 0 .157-.278V10.075a.33.33 0 0 0-.159-.283l-10.26-5.917a.32.32 0 0 0-.317 0L5.587 9.794a.33.33 0 0 0-.162.281v11.841a.32.32 0 0 0 .161.274L8.4 23.814c1.525.762 2.459-.136 2.459-1.038V11.085a.3.3 0 0 1 .3-.3h1.3a.3.3 0 0 1 .3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.4 4.4 0 0 1-2.363-.642l-2.697-1.547a2.17 2.17 0 0 1-1.076-1.872V10.075A2.16 2.16 0 0 1 4.661 8.2l10.261-5.924a2.25 2.25 0 0 1 2.156 0L27.338 8.2a2.17 2.17 0 0 1 1.077 1.87v11.846a2.17 2.17 0 0 1-1.077 1.872l-10.26 5.924A2.15 2.15 0 0 1 16 30" /><path fill="#83cd29" d="M14.054 17.953a.3.3 0 0 1 .3-.3h1.327a.3.3 0 0 1 .295.251c.2 1.351.8 2.032 3.513 2.032c2.161 0 3.082-.489 3.082-1.636c0-.661-.261-1.152-3.62-1.481c-2.808-.278-4.544-.9-4.544-3.144c0-2.07 1.745-3.305 4.67-3.305c3.287 0 4.914 1.141 5.12 3.589a.3.3 0 0 1-.295.323h-1.336a.3.3 0 0 1-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875c-2.36 0-2.634.822-2.634 1.438c0 .746.324.964 3.51 1.385c3.153.417 4.651 1.007 4.651 3.223c0 2.236-1.864 3.516-5.115 3.516c-4.495.006-5.436-2.055-5.436-3.784" /></svg>
              <span>NodeJS</span>
            </a>
            <a href="/auth/platforms/deno" class="border border-solid border-white/25 rounded-xl px-4 py-2 block transition-colors duration-200 hover:bg-white/10 flex items-center gap-3" role="listitem" aria-label="Use Cloud Auth with Deno">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#0b894f" d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12S5.373 0 12 0m-.469 6.793c-3.49 0-6.204 2.196-6.204 4.928c0 2.58 2.498 4.228 6.37 4.145l.118-.003l.425-.012l-.109.279l.013.029q.047.108.084.22l.01.028l.015.045l.021.065l.014.045l.014.047l.015.049l.021.075l.022.079l.015.054l.023.084l.022.088l.023.091l.023.095l.015.065l.024.1l.023.103l.032.143l.017.074l.024.114l.024.117l.025.12l.035.174l.029.142l.037.195l.02.1l.028.155l.03.158l.039.217l.04.225l.04.231l.041.24l.042.246l.042.254l.042.26l.032.201l.055.344l.022.14l.055.36l.045.295l.034.227l.046.308l.023.156a10.76 10.76 0 0 0 6.529-3.412l.05-.055l-.238-.891l-.633-2.37l-.395-1.47l-.348-1.296l-.213-.787l-.136-.498l-.081-.297l-.073-.264l-.032-.11l-.018-.064l-.01-.034l-.008-.026a6.04 6.04 0 0 0-2.038-2.97c-1.134-.887-2.573-1.351-4.252-1.351M8.467 19.3a.586.586 0 0 0-.714.4l-.004.013l-.527 1.953q.493.245 1.008.437l.08.03l.57-2.114l.004-.015a.586.586 0 0 0-.417-.704m3.264-1.43a.586.586 0 0 0-.715.4l-.004.014l-.796 2.953l-.004.014a.586.586 0 0 0 1.131.305l.004-.014l.797-2.953l.003-.014l.013-.067l.002-.022l-.019-.096l-.027-.138l-.018-.086a.58.58 0 0 0-.367-.295Zm-5.553-3.04a1 1 0 0 0-.037.09l-.005.02l-.797 2.953l-.004.014a.586.586 0 0 0 1.131.306l.004-.014l.723-2.678a5.3 5.3 0 0 1-1.015-.692Zm-1.9-3.397a.586.586 0 0 0-.715.4l-.004.013l-.797 2.953l-.003.015a.586.586 0 0 0 1.13.305l.005-.014l.797-2.953l.003-.015a.586.586 0 0 0-.416-.704m17.868-.67a.586.586 0 0 0-.715.399l-.004.014l-.797 2.953l-.003.014a.586.586 0 0 0 1.13.305l.005-.014l.797-2.953l.003-.014a.586.586 0 0 0-.416-.704M2.542 6.82a10.7 10.7 0 0 0-1.251 3.926a.586.586 0 0 0 1.002-.22l.004-.014l.797-2.953l.003-.014a.586.586 0 0 0-.555-.725m17.585.02a.586.586 0 0 0-.714.4l-.004.014l-.797 2.953l-.004.014a.586.586 0 0 0 1.131.305l.004-.014l.797-2.953l.004-.014a.586.586 0 0 0-.417-.704Zm-7.846 1.926a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-6.27-4.733a.586.586 0 0 0-.715.398l-.004.015l-.797 2.953l-.004.014a.586.586 0 0 0 1.132.305l.003-.014l.797-2.953l.004-.014a.586.586 0 0 0-.417-.704Zm10.238.558a.586.586 0 0 0-.714.399l-.004.014l-.536 1.984q.521.257.99.603l.051.038l.626-2.32l.004-.014a.586.586 0 0 0-.417-.704m-5.211-3.33a11 11 0 0 0-1.115.158l-.078.015l-.742 2.753l-.004.015a.586.586 0 0 0 1.131.305l.004-.014l.797-2.953l.004-.015a.6.6 0 0 0 .003-.264m7.332 2.04l-.156.58l-.004.015a.586.586 0 0 0 1.131.305l.004-.014l.017-.063a11 11 0 0 0-.923-.772zm-4.636-1.944l-.283 1.048l-.003.014a.586.586 0 0 0 1.13.305l.005-.014l.297-1.102q-.525-.145-1.063-.237z" /></svg>
              <span>Deno</span>
            </a>
            <a href="/auth/platforms/bun" class="border border-solid border-white/25 rounded-xl px-4 py-2 block transition-colors duration-200 hover:bg-white/10 flex items-center gap-3" role="listitem" aria-label="Use Cloud Auth with Bun">
              <svg xmlns="http://www.w3.org/2000/svg" width="36.41" height="32" viewBox="0 0 256 225"><path d="M228.747 65.588a38 38 0 0 0-1.62-1.62c-.55-.519-1.07-1.102-1.62-1.62c-.551-.52-1.07-1.102-1.62-1.62c-.551-.52-1.07-1.103-1.62-1.621c-.552-.519-1.07-1.102-1.62-1.62c-.552-.519-1.07-1.102-1.621-1.62c-.551-.52-1.07-1.102-1.62-1.62a85.74 85.74 0 0 1 25.632 59.819c0 53.695-54.505 97.377-121.519 97.377c-37.525 0-71.097-13.707-93.424-35.192l1.62 1.62l1.62 1.62l1.62 1.62l1.621 1.621l1.62 1.62l1.62 1.62l1.621 1.62c22.295 22.393 56.612 36.813 95.044 36.813c67.014 0 121.519-43.682 121.519-97.215c0-22.878-9.851-44.557-27.253-61.602" /><path fill="#FBF0DF" d="M234.937 114.066c0 49.288-50.779 89.243-113.418 89.243S8.101 163.354 8.101 114.066c0-30.558 19.443-57.552 49.32-73.56C87.3 24.498 105.9 8.101 121.52 8.101s28.97 13.384 64.097 32.405c29.878 16.008 49.32 43.002 49.32 73.56" /><path fill="#F6DECE" d="M234.937 114.066a70.2 70.2 0 0 0-2.593-18.73c-8.846 107.909-140.476 113.093-192.227 80.818a129.62 129.62 0 0 0 81.402 27.155c62.542 0 113.418-40.02 113.418-89.243" /><path fill="#FFFEFC" d="M77.87 34.576c14.484-8.684 33.733-24.984 52.658-25.017a30.1 30.1 0 0 0-9.009-1.458c-7.842 0-16.203 4.05-26.734 10.143c-3.662 2.139-7.453 4.504-11.472 6.967c-7.55 4.666-16.202 9.948-25.924 15.23c-30.85 16.69-49.288 44.201-49.288 73.625v3.856C27.74 48.542 63.417 43.261 77.87 34.576" /><path fill="#CCBEA7" d="M112.186 16.3a53.18 53.18 0 0 1-18.244 40.409c-.907.81-.194 2.365.972 1.912c10.92-4.245 25.665-16.948 19.443-42.58c-.259-1.459-2.17-1.07-2.17.259m7.356 0a52.63 52.63 0 0 1 5.217 43.65c-.388 1.134 1.005 2.106 1.783 1.166c7.096-9.073 13.286-27.09-5.25-46.534c-.94-.842-2.398.454-1.75 1.588zm8.944-.551a53.2 53.2 0 0 1 22.198 38.108a1.07 1.07 0 0 0 2.106.357c2.981-11.31 1.296-30.59-23.235-40.604c-1.296-.518-2.138 1.232-1.069 2.01zM68.666 49.45a54.9 54.9 0 0 0 33.928-29.164c.584-1.167 2.43-.713 2.14.583c-5.607 25.924-24.37 31.336-36.035 30.623c-1.232.032-1.2-1.685-.033-2.042" /><path d="M121.519 211.443C54.505 211.443 0 167.761 0 114.066c0-32.405 20.026-62.64 53.566-80.754c9.721-5.184 18.05-10.402 25.47-14.97c4.083-2.528 7.94-4.894 11.666-7.097C102.076 4.505 111.797 0 121.519 0s18.212 3.889 28.84 10.175c3.241 1.847 6.482 3.856 9.949 6.06c8.069 4.99 17.175 10.629 29.164 17.077c33.54 18.115 53.566 48.316 53.566 80.754c0 53.695-54.505 97.377-121.519 97.377m0-203.342c-7.842 0-16.203 4.05-26.734 10.143c-3.662 2.139-7.453 4.504-11.472 6.967c-7.55 4.666-16.202 9.948-25.924 15.23c-30.85 16.69-49.288 44.201-49.288 73.625c0 49.223 50.876 89.276 113.418 89.276s113.418-40.053 113.418-89.276c0-29.424-18.439-56.936-49.32-73.56c-12.25-6.48-21.81-12.573-29.554-17.369c-3.532-2.17-6.773-4.18-9.722-5.962c-9.818-5.833-16.98-9.074-24.822-9.074" /><path fill="#B71422" d="M144.365 137.722a28.94 28.94 0 0 1-9.463 15.263a22.07 22.07 0 0 1-12.962 6.092a22.17 22.17 0 0 1-13.383-6.092a28.94 28.94 0 0 1-9.333-15.263a2.333 2.333 0 0 1 2.593-2.625h39.988a2.333 2.333 0 0 1 2.56 2.625" /><path fill="#FF6164" d="M108.557 153.244a22.4 22.4 0 0 0 13.351 6.157a22.4 22.4 0 0 0 13.318-6.157a34.5 34.5 0 0 0 3.241-3.468a22.13 22.13 0 0 0-15.879-7.485a19.93 19.93 0 0 0-16.202 9.008c.745.681 1.393 1.33 2.171 1.945" /><path d="M109.076 150.684a17.37 17.37 0 0 1 13.577-6.74a19.44 19.44 0 0 1 12.962 5.476a51 51 0 0 0 2.139-2.495a22.68 22.68 0 0 0-15.263-6.254a20.61 20.61 0 0 0-15.846 7.647a31 31 0 0 0 2.43 2.366" /><path d="M121.81 161.021a24.05 24.05 0 0 1-14.42-6.481a30.85 30.85 0 0 1-10.077-16.365a3.89 3.89 0 0 1 .842-3.24a4.57 4.57 0 0 1 3.662-1.653h39.988a4.67 4.67 0 0 1 3.661 1.653a3.86 3.86 0 0 1 .81 3.24A30.85 30.85 0 0 1 136.2 154.54c-3.93 3.717-9 6-14.388 6.481m-19.993-23.98c-.519 0-.648.227-.68.292a26.86 26.86 0 0 0 8.846 14.16a20.2 20.2 0 0 0 11.828 5.672a20.35 20.35 0 0 0 11.828-5.606a26.9 26.9 0 0 0 8.814-14.161a.68.68 0 0 0-.648-.292z" /><g transform="translate(53.792 88.4)"><ellipse cx="117.047" cy="40.183" fill="#FEBBD0" rx="18.957" ry="11.147" /><ellipse cx="18.957" cy="40.183" fill="#FEBBD0" rx="18.957" ry="11.147" /><path d="M27.868 35.71a17.855 17.855 0 1 0-17.822-17.854c0 9.848 7.974 17.837 17.822 17.855m80.268 0A17.855 17.855 0 1 0 90.41 17.857c-.018 9.818 7.908 17.801 17.726 17.855" /><path fill="#FFF" d="M22.36 18.99a6.708 6.708 0 1 0 .064-13.416a6.708 6.708 0 0 0-.065 13.416m80.267 0a6.708 6.708 0 1 0-.065 0z" /></g></svg>
              <span>Bun</span>
            </a>
            <a href="/auth/platforms/cloudflare" class="border border-solid border-white/25 rounded-xl px-4 py-2 block transition-colors duration-200 hover:bg-white/10 flex items-center gap-3" role="listitem" aria-label="Use Cloud Auth with Cloudflare Workers">
              <svg xmlns="http://www.w3.org/2000/svg" width="120.48" height="32" viewBox="0 0 512 136"><defs><linearGradient id="logosCloudflareWorkers0" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stop-color="#EB6F07" /><stop offset="100%" stop-color="#FAB743" /></linearGradient><linearGradient id="logosCloudflareWorkers1" x1="81%" x2="40.5%" y1="83.7%" y2="29.5%"><stop offset="0%" stop-color="#D96504" /><stop offset="100%" stop-color="#D96504" stop-opacity="0" /></linearGradient><linearGradient id="logosCloudflareWorkers2" x1="42%" x2="84%" y1="8.7%" y2="79.9%"><stop offset="0%" stop-color="#EB6F07" /><stop offset="100%" stop-color="#EB720A" stop-opacity="0" /></linearGradient><linearGradient id="logosCloudflareWorkers3" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stop-color="#EE6F05" /><stop offset="100%" stop-color="#FAB743" /></linearGradient><linearGradient id="logosCloudflareWorkers4" x1="-33.2%" x2="91.7%" y1="100%" y2="0%"><stop offset="0%" stop-color="#D96504" stop-opacity=".8" /><stop offset="49.8%" stop-color="#D96504" stop-opacity=".2" /><stop offset="100%" stop-color="#D96504" stop-opacity="0" /></linearGradient><linearGradient id="logosCloudflareWorkers5" x1="50%" x2="25.7%" y1="100%" y2="8.7%"><stop offset="0%" stop-color="#FFA95F" /><stop offset="100%" stop-color="#FFEBC8" /></linearGradient><linearGradient id="logosCloudflareWorkers6" x1="8.1%" x2="96.5%" y1="1.1%" y2="48.8%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5" /><stop offset="100%" stop-color="#FFF" stop-opacity=".1" /></linearGradient><linearGradient id="logosCloudflareWorkers7" x1="-13.7%" x2="100%" y1="104.2%" y2="46.2%"><stop offset="0%" stop-color="#FFF" stop-opacity=".5" /><stop offset="100%" stop-color="#FFF" stop-opacity=".1" /></linearGradient></defs><path fill="#eee" d="m199.787 115.617l-18.998-56.02h13.11l11.523 37.672l12.46-37.817h10.475l12.534 37.817l11.558-37.673h12.75l-18.963 56.021h-10.655l-12.57-36.408l-12.533 36.408zm88.925.542c-13.22 0-22.971-9.752-22.971-21.997v-.144c0-12.28 9.86-22.177 23.116-22.177c13.183 0 22.971 9.752 22.971 22.032v.145c0 12.208-9.86 22.14-23.116 22.14m.145-10.403c6.898 0 11.052-5.309 11.052-11.594v-.144c0-6.285-4.55-11.775-11.197-11.775c-6.935 0-11.052 5.31-11.052 11.594v.18c0 6.25 4.515 11.74 11.197 11.74m31.712 9.464V72.6h12.064v8.596c2.456-5.852 6.43-9.68 13.58-9.391v12.641h-.577c-8.019 0-12.967 4.876-12.967 15.026v15.748zm33.23 0V57.213h12.063V88.13l14.123-15.53h14.448L378.25 89.394l16.76 25.825h-13.834l-11.125-17.41l-4.19 4.443v12.967h-12.1zm65.23.939c-12.822 0-22.249-8.958-22.249-21.997v-.144c0-12.172 8.669-22.177 21.058-22.177c14.195 0 20.732 11.052 20.732 23.116c0 .939-.072 2.059-.18 3.178h-29.618c1.192 5.49 4.984 8.344 10.402 8.344c4.045 0 7.007-1.264 10.33-4.37l6.899 6.14a21.31 21.31 0 0 1-17.373 7.946zm-10.438-25.573h18.204c-.722-5.417-3.9-9.03-8.957-9.03c-5.02 0-8.308 3.54-9.247 9.03m38.937 24.634V72.6h12.1v8.596c2.456-5.852 6.429-9.68 13.58-9.391v12.641h-.65c-8.018 0-12.93 4.876-12.93 15.026v15.748H447.49zm48.182.794c-5.96 0-12.641-1.986-18.276-6.429l5.165-7.946a24.1 24.1 0 0 0 13.4 5.057c3.504 0 5.093-1.265 5.093-3.143v-.18c0-2.6-4.118-3.504-8.813-4.913c-5.96-1.77-12.714-4.55-12.714-12.786v-.18c0-8.669 7.007-13.509 15.567-13.509c5.418 0 11.306 1.806 15.893 4.949l-4.587 8.307a25.25 25.25 0 0 0-11.558-3.973c-2.89 0-4.443 1.3-4.443 2.962v.144c0 2.384 4.081 3.504 8.669 5.093c5.96 1.986 12.894 4.84 12.894 12.641v.145c0 9.463-7.08 13.761-16.29 13.761" /><path fill="#CCC" d="M207.697 23.91h5.635v15.207h9.86v4.876h-15.53V23.911zm21.274 10.114v-.072c0-5.78 4.696-10.475 10.944-10.475a10.475 10.475 0 0 1 10.836 10.403v.072c0 5.779-4.695 10.438-10.908 10.438a10.475 10.475 0 0 1-10.872-10.402zm16.11 0v-.072c0-2.89-2.095-5.418-5.202-5.418c-3.07 0-5.129 2.456-5.129 5.382v.036c0 2.89 2.095 5.418 5.165 5.418c3.107 0 5.165-2.456 5.165-5.382zm12.605 1.156V23.91h5.707v11.198c0 2.89 1.48 4.226 3.72 4.226s3.72-1.3 3.72-4.118V23.911h5.707v11.124c0 6.502-3.72 9.32-9.5 9.32c-5.778 0-9.39-2.89-9.39-9.175zm27.45-11.27h7.802c7.224 0 11.45 4.118 11.45 9.934v.072c0 5.779-4.262 10.113-11.558 10.113h-7.694V23.875zm7.947 15.17c3.323 0 5.562-1.841 5.562-5.128c0-3.25-2.24-5.093-5.598-5.093h-2.276v10.15h2.276v.036zm19.504-15.17h16.217v4.877h-10.619v3.431h9.608v4.623h-9.608v7.152h-5.598zm24.02 0h5.598v15.207h9.824v4.876h-15.423zm30.086-.144h5.418l8.669 20.227h-6.068l-1.445-3.576h-7.838l-1.445 3.612h-5.887zm4.949 12.317l-2.24-5.707l-2.275 5.707zm16.325-12.172h9.608c3.106 0 5.237.794 6.61 2.167c1.192 1.156 1.806 2.709 1.806 4.695v.073c0 3.106-1.662 5.129-4.154 6.14l4.84 7.08h-6.501l-4.118-6.069h-2.456v6.068h-5.635zm9.355 9.644c1.914 0 2.998-.94 2.998-2.384v-.073c0-1.553-1.156-2.347-3.034-2.347h-3.72v4.804zm16.76-9.644h16.253v4.695H419.68v3.07h9.716v4.407h-9.752v3.178h10.908v4.732h-16.435V23.911zM195.38 36.37a4.98 4.98 0 0 1-4.624 2.999c-3.07 0-5.165-2.529-5.165-5.418s2.06-5.418 5.13-5.418a5.06 5.06 0 0 1 4.803 3.36h5.996a10.55 10.55 0 0 0-10.691-8.344c-6.249 0-10.944 4.695-10.944 10.474v.036a10.475 10.475 0 0 0 10.871 10.403c5.346 0 9.536-3.432 10.62-8.019l-5.924-.036z" /><path fill="url(#logosCloudflareWorkers0)" d="m38.624 1.95l17.699 31.93l-16.254 29.256a9.39 9.39 0 0 0 0 9.138l16.254 29.329l-17.699 31.929a18.8 18.8 0 0 1-7.946-7.477L2.505 77.115a18.85 18.85 0 0 1 0-18.783L30.678 9.391a18.8 18.8 0 0 1 7.946-7.44" /><path fill="url(#logosCloudflareWorkers1)" d="M40.069 63.172a9.39 9.39 0 0 0 0 9.102l16.254 29.329l-17.699 31.929a18.8 18.8 0 0 1-7.946-7.477L2.505 77.115C.265 73.248 12.8 68.625 40.07 63.207z" opacity=".7" /><path fill="url(#logosCloudflareWorkers2)" d="M40.43 5.165L56.323 33.88l-2.637 4.587l-14.014-23.73c-4.046-6.61-10.222-3.179-17.952 10.185l1.156-1.986L30.678 9.39a18.8 18.8 0 0 1 7.874-7.44l1.842 3.214z" opacity=".5" /><path fill="url(#logosCloudflareWorkers3)" d="m119.53 9.39l28.174 48.942c3.359 5.78 3.359 13.003 0 18.782l-28.173 48.941a18.78 18.78 0 0 1-16.254 9.391H75.104l35.036-63.172a9.39 9.39 0 0 0 0-9.102L75.104 0h28.173a18.78 18.78 0 0 1 16.254 9.39" /><path fill="url(#logosCloudflareWorkers4)" d="m101.832 135.23l-27.811.252l33.663-63.497a9.75 9.75 0 0 0 0-9.174L74.02 0h6.357l35.324 62.522a9.75 9.75 0 0 1-.036 9.68a5643 5643 0 0 0-22.647 39.73c-6.862 12.065-3.9 19.83 8.813 23.298" /><path fill="url(#logosCloudflareWorkers5)" d="M46.932 135.446c-2.89 0-5.78-.686-8.308-1.914l34.747-62.666a6.48 6.48 0 0 0 0-6.285L38.624 1.95A18.8 18.8 0 0 1 46.932 0h28.172l35.036 63.172a9.39 9.39 0 0 1 0 9.102l-35.036 63.172z" /><path fill="url(#logosCloudflareWorkers6)" d="M107.684 64.58L71.854 0h3.25l35.036 63.172a9.39 9.39 0 0 1 0 9.102l-35.036 63.172h-3.25l35.83-64.58a6.48 6.48 0 0 0 0-6.285" opacity=".6" /><path fill="url(#logosCloudflareWorkers7)" d="M73.37 64.58L38.625 1.95c1.084-.577 2.384-1.01 3.612-1.372C49.893 14.339 61.2 35.216 76.188 63.172a9.39 9.39 0 0 1 0 9.102l-34.494 62.45c-1.228-.361-1.878-.614-3.034-1.156l34.675-62.666a6.48 6.48 0 0 0 0-6.285z" opacity=".6" /></svg>
            </a>
          </div>
        </div>

        <img src="/img/illustration/space-bird.svg" class="w-48 mt-12 mx-auto -scale-x-100">
      </div>
    </div>
    <!-- Features -->
    <div class="py-24 mx-auto max-w-7xl px-4">
      <h2 class="text-5xl">
        Get Started
      </h2>
      <p class="mb-8 mt-1 opacity-80">
        Follow these three steps to integrate Cloud Auth into your applications.
      </p>

      <div class="flex flex-col gap-6 mb-6 pt-8">
        <!-- CLI -->
        <div class="cli-block rounded-xl mt-12">
          <h3 class="text-4xl text-left mb-2">
            1. Create your application
          </h3>
          <p>
            Use one of the below commands with our CLI tool to get signed up and create your first application.
          </p>

          <div class="flex flex-col lg:flex-row items-center my-12 gap-6 vp-doc">
            <div class="flex flex-col max-w-xl text-left">
              <h3 class="text-2xl px-3 sm:px-0">
                Try an example app
              </h3>
              <p class="mt-1 mb-6 opacity-80 px-3 sm:px-0">
                Use the <code class="text-[var(--s)]">example</code> command to create an example application for your backend platform and frontend framework.
              </p>
              <div class="border-10 border-solid border-base-200 rounded-xl max-w-screen">
                <slot name="cli" />
              </div>
            </div>

            <div class="text-2xl">
              OR
            </div>

            <div class="flex flex-col max-w-xl text-left">
              <h3 class="text-2xl px-3 sm:px-0">
                Integrate your app
              </h3>
              <p class="mt-1 mb-6 opacity-80 px-3 sm:px-0">
                Use the <code class="text-[var(--s)]">integrate</code> command to integrate Feathers Cloud Auth into your existing application.
              </p>
              <div class="border-10 border-solid border-base-200 rounded-xl max-w-screen">
                <slot name="cli2" />
              </div>
            </div>
          </div>
        </div>

        <div class="cli-block rounded-xl mt-12">
          <h3 class="text-4xl text-left mb-2">
            2. Customize your theme
          </h3>
          <p>
            <a href="" class="text-primary">Sign in to the dashboard</a> and customize your theme to match your brand.
          </p>

          <div class="flex flex-row items-center mt-4 mb-12 gap-6">
            <div class="flex-1">
              <img
                src="https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/30aef796-4df0-421c-a129-053a06d6f400/publichd"
                alt="Customize your Login page theme"
                class="rounded-xl border-12 border-solid border-white/10 shadow-xl mt-8"
              >
            </div>
          </div>
        </div>

        <div class="cli-block rounded-xl mt-12">
          <h3 class="text-4xl text-left mb-2">
            3. Keep track of user activity.
          </h3>
          <p>
            Use the dashboard to keep track of your users and their activity.
          </p>

          <div class="flex flex-row items-center mt-4 mb-12 gap-6">
            <img
              src="https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/71ddf09c-4fad-4f64-edb4-1de12e610c00/publichd"
              alt="Feathers Cloud Auth Dashboard"
              class="rounded-xl border-12 border-solid border-white/10 shadow-xl mt-8"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto max-w-4xl px-4 relative">
      <div class="mb-14 text-center">
        <h2 class="text-5xl">
          Flexible Pricing
        </h2>
        <div class="mt-2 text-xl">
          Get Started for Free. <br>Pay only for what you use.
        </div>
      </div>
      <Pricing />
    </div>

    <img src="/img/illustration/footer-bird-no-bg.svg">
  </div>
</template>

<style lang="postcss">
@media (min-width: 768px) {
  .auth-landing-page {
    margin-top: -56px;
    margin-bottom: 40px;
    padding-top: 56px;
  }
}
@media (min-width: 960px) {
  .auth-landing-page {
    margin-top: -144px;
    margin-bottom: 40px;
  }
}

.auth-landing-page {
  width: 100%;
  background: linear-gradient(to bottom, #040407 0%, #281c43 56%, #ec5f62 100%);
}

.bg-stars {
  background: url('https://imagedelivery.net/9JPgw8SmnowT-UlbCrbUxw/a671b2ce-e05e-48d3-8c86-4fc1e934d800/public');
  background-position: top center;
  background-size: 1300px;
}

.vp-doc .vp-adaptive-theme {
  margin: 0 !important;
}
.vp-doc .vp-code {
  padding: 30px 0 !important;
  font-size: larger;
}
</style>
