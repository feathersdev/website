<script setup lang="ts">
</script>

<template>
  <div class="p-4 sm:p-8 bg-white/4 rounded-lg inline-flex flex-col gap-3 relative">
    <div>
      <h3 class="text-xl font-bold">
        Subscribe
      </h3>
      <h4 class="text-sm">
        Get the best Feathers Cloud content as it becomes available.
      </h4>
    </div>

    <form
      action="https://buttondown.email/api/emails/embed-subscribe/feathers"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://buttondown.email/feathers', 'popupwindow')"
      class="embeddable-buttondown-form flex flex-col"
    >
      <!-- <label for="bd-email">Email</label> -->
      <div class="flex flex-col sm:flex-row">
        <input
          id="bd-email" type="email" name="email"
          class="bg-white/10 py-3 px-3 text-xl rounded-t-lg sm:rounded-tr-none sm:rounded-l-lg w-full" placeholder="enter your email"
        >
        <button
          type="submit" name="Submit" value="Subscribe"
          class="btn btn-primary items-center justify-center py-3 rounded-b-lg sm:rounded-b-none rounded-t-none sm:rounded-r-lg text-lg"
        >
          Subscribe
        </button>
      </div>
    </form>
  </div>
</template>
