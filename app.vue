<template>
  <div class="lg:max-w-7xl mx-auto mt-5 flex flex-col lg:flex-row wrapperFont">
    <div class="lg:w-1/2 flex flex-col mx-10 order-last lg:order-1">
      <NuxtImg
        src="https://images.pexels.com/photos/2749481/pexels-photo-2749481.jpeg?cs=srgb&dl=pexels-nicole-avagliano-1132392-2749481.jpg&fm=jpg"
        class="rounded-xl mb-8"
      />
      <p class="m-1">Wezmą udział:</p>
      <UAvatarGroup
        size="sm"
        :max="5"
      >
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="benjamincanac"
        />
        <UAvatar
          src="https://avatars.githubusercontent.com/u/904724?v=4"
          alt="Atinux"
        />
        <UAvatar
          src="https://avatars.githubusercontent.com/u/7547335?v=4"
          alt="smarroufin"
        />
        <UAvatar
          src="https://avatars.githubusercontent.com/u/739984?v=4"
          alt="benjamincanac"
        />
        <UAvatar
          src="https://avatars.githubusercontent.com/u/904724?v=4"
          alt="Atinux"
        />
        <UAvatar
          src="https://avatars.githubusercontent.com/u/7547335?v=4"
          alt="smarroufin"
        />
      </UAvatarGroup>
    </div>
    <div class="mx-10 lg:w-1/2 lg:order-2">
      <div>
        <h2 class="text-4xl font-mono uppercase">
          Wyścigi Pojazdów Klasycznych
        </h2>
        <p class="mt-4">79.00 PLN</p>
        <UBadge
          label="26 Kwiecien, 2024 09:00-18:00"
          class="my-2"
          variant="subtle"
        />

        <div class="flex flex-wrap items-center gap-3 mb-4">
          <UButton
            color="white"
            target="_blank"
            size="sm"
          >
            <UAvatar
              src="https://avatars.githubusercontent.com/u/7547335?v=4"
              size="2xs"
            />

            Paweł Pietras
          </UButton>
        </div>

        <UDivider />

        <p class="my-2 text-2xl font-bold">Odwiedź nas tutaj!</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2452.57408122003!2d-1.0239735231538074!3d52.06927857194654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48771c5823926c25%3A0x1142afb591c324a6!2sSilverstone%20Circuit!5e0!3m2!1spl!2spl!4v1713807850598!5m2!1spl!2spl"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="w-full h-96 rounded-md"
        ></iframe>
        <div
          class="flex flex-row items-center justify-start my-2 text-primary-500"
        >
          <hr class="w-5 h-1 border-0 bg-primary-500 mr-2" />
          OPIS
        </div>
        <p class="my-2 descriptionWrapper">
          Wyjątkowa okazja dla miłośników klasycznych pojazdów do uczestnictwa w
          emocjonujących wyścigach na torze Silverstone. Wydarzenie obejmuje
          pokazy samochodów klasycznych, konkursy, stoiska z akcesoriami oraz
          wiele innych atrakcji.
        </p>

        <UButton
          icon="i-heroicons-pencil-square"
          size="md"
          color="primary"
          variant="solid"
          label="Wpisz się!"
          class="justify-center mb-5 lg:mb-0"
          :trailing="false"
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapperFont {
  font-family: Unica One;
}
.descriptionWrapper {
  font-family: Karla;
}
</style>
