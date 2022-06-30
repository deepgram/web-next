<script setup>
import { computed, ref } from "vue";
import Toggle from "../../Toggle.vue";
const pricingModels = {
  baseModel: [
    {
      title: "Pay As You Go",
      text: "No minimum, No expiration.",
      preRecorded: 0.0125,
      live: 0.0158,
      cta: "Start for Free",
      addons: 0.008,
      extraAudio: 0.004,
    },
    {
      title: "Starter",
      text: "Pre-paid for the year, starting at:",
      fee: 500,
      preRecorded: 0.0108,
      live: 0.0142,
      cta: "Request Access",
      addons: 0.008,
      extraAudio: 0.004,
    },
    {
      title: "Growth",
      text: "Pre-paid for the year, starting at:",
      fee: 2000,
      preRecorded: 0.009,
      live: 0.0125,
      cta: "Request Access",
      addons: 0.008,
      extraAudio: 0.004,
    },
  ],
  enhancedModel: [
    {
      title: "Pay As You Go",
      text: "No minimum, No expiration.",
      preRecorded: 0.0208,
      live: 0.0265,
      cta: "Start for Free",
      addons: 0.008,
      extraAudio: 0.004,
    },
    {
      title: "Starter",
      text: "Pre-paid for the year, starting at:",
      fee: 500,
      preRecorded: 0.0192,
      live: 0.0248,
      cta: "Request Access",
      addons: 0.008,
      extraAudio: 0.004,
    },
    {
      title: "Growth",
      text: "Pre-paid for the year, starting at:",
      fee: 2000,
      preRecorded: 0.0175,
      live: 0.0232,
      cta: "Request Access",
      addons: 0.008,
      extraAudio: 0.004,
    },
  ],
};
let checkedValue = ref(false);
</script>

<template class="bg-green">
  <div id="pricing-section">
    <h3>Pay ahead. Save money.</h3>
    <Toggle
      v-model="checkedValue"
      @input="checkedValue = $event.target.checked"
      class="toggle"
    />
    <div class="plans">
      <div class="plan all col-start-3">
        <h4 class="plan-header">All plans include:</h4>
        <ul>
          <li>REST API & SDKs</li>
          <li>Pre-recorded and live streaming transcription</li>
          <li>
            Access to all features (understanding features at addional cost as
            noted)
          </li>
          <li>2 audio channels</li>
          <li>20+ languages and dialects supported</li>
          <li>7+ use-case models</li>
          <li>Billing calculated per second transcribed</li>
          <li>Basic support via email</li>
        </ul>
        <p>and more...</p>
      </div>
      <template v-if="!checkedValue">
        <div
          v-for="(plan, index) in pricingModels.baseModel"
          :key="`baseModel-${index}`"
          class="plan"
          :class="`col-start-${index + 4}`"
        >
          <div class="plan-header">
            <h4>{{ plan.title }}</h4>
            <p class="plan-text">{{ plan.text }}</p>
            <p v-if="plan.fee" class="plan-fee"><sup>$</sup>{{ plan.fee }}</p>
          </div>
          <div class="rates">
            <p><strong>Base Model</strong> transcription rates:</p>
            <div class="transcription">
              <img src="/images/pre-recorded-file.svg" />
              <div>
                <p>Pre-recorded transcription</p>
                <p class="price-per-min">
                  <span class="number">${{ plan.preRecorded }}</span
                  >/min
                </p>
              </div>
            </div>
            <div class="transcription">
              <img src="/images/live-streaming.svg" />
              <div>
                <p>Live streaming transcription</p>
                <p class="price-per-min">
                  <span class="number">${{ plan.live }}</span
                  >/min
                </p>
              </div>
            </div>
            <a
              href="#"
              class="button"
              :class="{
                green: index === 0,
                gray: index != 0,
              }"
              >{{ plan.cta }}</a
            >
          </div>
          <div class="add-ons">
            <h5>Plus access to add-ons:</h5>
            <hr />
            <div class="flex justify-between">
              <p>
                Understanding
                <span class="text-xl">+ ${{ plan.addons }}</span
                >/min
              </p>
            </div>
            <ul>
              <li>Speaker Diarization</li>
              <li>Redaction</li>
              <li>Named Entity Recognition</li>
            </ul>
            <hr />
            <div class="flex justify-between">
              <p>
                Extra audio channels
                <span class="text-xl">+ ${{ plan.extraAudio }}</span
                >/min
              </p>
            </div>
            <p class="text-sm">
              Cost per additoinal channel over the 2 included channels
            </p>
          </div>
        </div>
      </template>

      <template v-else>
        <div
          v-for="(plan, index) in pricingModels.enhancedModel"
          :key="`enhancedModel-${index}`"
          class="plan"
          :class="`col-start-${index + 4}`"
        >
          <div class="plan-header">
            <h4>{{ plan.title }}</h4>
            <p class="plan-text">{{ plan.text }}</p>
            <p v-if="plan.fee" class="plan-fee"><sup>$</sup>{{ plan.fee }}</p>
          </div>

          <div class="rates">
            <p><strong>Enhanced Model</strong> transcription rates:</p>
            <div class="transcription">
              <img src="/images/pre-recorded-file.svg" />
              <div>
                <p>Pre-recorded transcription</p>
                <p class="price-per-min">
                  <span class="number">${{ plan.preRecorded }}</span
                  >/min
                </p>
              </div>
            </div>
            <div class="transcription">
              <img src="/images/live-streaming.svg" />
              <div>
                <p>Live streaming transcription</p>
                <p class="price-per-min">
                  <span class="number">${{ plan.live }}</span
                  >/min
                </p>
              </div>
            </div>
            <a
              href="#"
              class="button"
              :class="{
                green: index === 0,
                gray: index != 0,
              }"
              >{{ plan.cta }}</a
            >
          </div>
          <div class="add-ons">
            <h5>Plus access to add-ons:</h5>
            <hr />
            <div class="flex justify-between">
              <p>
                Understanding
                <span class="text-xl">+ ${{ plan.addons }}</span
                >/min
              </p>
            </div>
            <ul>
              <li>Speaker Diarization</li>
              <li>Redaction</li>
              <li>Named Entity Recognition</li>
            </ul>
            <hr />
            <div class="flex justify-between">
              <p>
                Extra audio channels
                <span class="text-xl">+ ${{ plan.extraAudio }}</span
                >/min
              </p>
            </div>
            <p class="text-sm">
              Cost per additoinal channel over the 2 included channels
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
#pricing-section {
  @apply bg-white text-darkCharcoal;
  @apply m-auto pb-10;
}
h3 {
  @apply text-4xl font-bold pt-5 pb-3 text-center;
}
/* @media only screen and (min-width: 0px) { */
.plans {
  @apply m-auto grid grid-cols-1;
}
/* } */
.plan:nth-of-type(1) {
  @apply bg-darkCharcoal text-white text-left;
  @apply flex justify-center flex-col;
  @apply md:col-start-1 md:p-3;
}
@screen md {
  .plans {
    @apply grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .plan {
    @apply m-3;
  }
}

@screen xl {
  .plans {
    grid-template-columns: 1fr repeat(4, minmax(310px, 1fr)) 1fr;
  }
  .plan {
    grid-template-rows: 1fr 250px 250px;
  }
  .plan:nth-of-type(1) {
    @apply col-start-2;
  }
}

.plan {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  @apply bg-white col-span-1 col-start-auto mx-4 p-4;
  @apply grid;
  @apply md:m-3;
  grid-template-rows: 1fr 210px 230px;
}

.plan .plan-header {
  @apply mb-auto mt-auto text-center;
}

.plan .plan-header .plan-fee {
  @apply text-3xl font-bold;
}

.plan .add-ons {
  @apply mt-auto;
}

.plan:nth-of-type(1) li {
  list-style-image: url(/src/assets/icons/greencheck.svg);
  @apply ml-7 mb-5;
}

.plan:nth-of-type(1) > p {
  @apply ml-7;
}

.plan p {
  @apply text-sm my-2;
}

.plan h4 {
  @apply text-2xl font-bold text-center;
}

.plan .plan-text {
  @apply text-sm my-1;
}

.plan hr {
  @apply border-darkCharcoal;
}

.toggle {
  @apply text-center mb-4;
}

.transcription {
  @apply flex items-center;
}

.transcription p {
  @apply text-xs ml-2;
}

.price-per-min {
  @apply text-lg;
}

.price-per-min .number {
  @apply text-2xl;
}

.rates {
  @apply flex flex-col justify-between;
}

.button {
  @apply flex justify-center items-center;
  border-radius: 1px;
  @apply font-semibold p-2 m-auto w-full mt-auto;
}
.button.green {
  @apply bg-meadow;
}
.button.gray {
  @apply bg-powder;
}
</style>
