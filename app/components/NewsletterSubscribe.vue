<template>
  <div>
    <Titles
      title="Subscribe to our Newsletter"
      description="Get new Feathers content as it becomes available."
    />
    
    <form action="https://buttondown.email/api/emails/embed-subscribe/feathers" method="post" target="popupwindow"
      onsubmit="window.open('https://buttondown.email/feathers', 'popupwindow')"
      class="embeddable-buttondown-form flex flex-col"
    >
      <Join class="mt-8">
        <Label xl join floating input class="bg-white/10 py-3 px-3 w-full">
          <Text>Enter your email</Text>
          <Input 
            type="email" 
              placeholder="Enter your email" 
              id="bd-email" 
              name="email" 
            />
          </Label>
          <Button join primary type="submit" value="Subscribe" name="Submit" size="xl">
            Subscribe
          </Button>
      </Join>
    </form>
  </div>
</template>
