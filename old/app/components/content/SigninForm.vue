<template>
  <div class="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img
          class="w-auto h-24 mx-auto invert"
          src="https://avatars.githubusercontent.com/u/85031756"
          alt="Feathers Cloud"
        >
        <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <div class="mt-8 space-y-6">
        <a
          type="button"
          class="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          href="/api/auth/login"
        >
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <Icon
              name="heroicons:lock-closed-solid" class="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Sign in
        </a>
        <div class="text-center">
          or
          <RouterLink to="/" class="text-blue-500">
            Return to Home
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
