<script>

export default {
  data() {
    return {
      Show: false,
    };
  },
  methods: {
    handleKeydown(event) {
      if (event.key === "Escape") {
        this.Show = false;
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeydown);
  },
};
</script>
<template>
  <div
    class="Back"
    style="
      background-image: url('/ref.jpg');
      background-repeat: no-repeat;
      background-size: cover;

      position: relative;

      overflow: hidden;
    "
  >
    <main>

      <div style="display: flex; position: fixed; bottom: 10px; left: 10px;">
        <div id="adblock-message" style="width: 200px !important;padding: 5px;border-radius: 10px;background-color: #960015;font-size: 15px">Пожалуйста, отключите блокировщик рекламы для нашего сайта, чтобы поддержать нас.</div>
      </div>
      <div class="flex">
        <button
          @click="Show = !Show"
          style="width: 50px; border-width: 0px !important; height: 20px; margin: 10px"
        >
          <img src="../images/Email.jpg" />
        </button>
      </div>
      <div
        v-show="Show"
        style="
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: black;
          opacity: 0.95;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        "
      >
        <div
          style="
            border-radius: 20px;
            border: 2px solid white;
            position: relative;
            width: 550px;
            padding: 30px;
            opacity: 1;
          "
        >
          При возникновении вопросов или пожеланий, писать на почту mysytes2490@gmail.com
          <button
            type="button"
            id="btn"
            @click="Show = false"
            style="height: 10px; position: absolute; right: 20px; top: 20px; width: 10px"
          >
            X
          </button>
        </div>
      </div>
      <section>
        <a
          class="fontt"
          style="
            color: white;
            line-height: 2;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
          "
        >
          Правила ОГЭ и устного собеседования
        </a>
      </section>
      <br />
      <section>
        <div
          style="
            font-size: 20px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            color: white;
          "
        >
          <ul class="cats">
            <button class="button" onclick="window.location.href='#/AboutMe'">
              Информация об ОГЭ и собеседовании
            </button>

            <input
              class="button"
              type="button"
              value="Русский язык"
              onclick="window.location.href='#/RusIaz'"
            />

            <input
              class="button"
              type="button"
              value="Математика"
              onclick="window.location.href='#/MaTh'"
            />

            <input
              class="button"
              type="button"
              value="Химия"
              onclick="window.location.href='#/Chemistry'"
            />

            <input
              class="button"
              type="button"
              value="Информатика"
              onclick="window.location.href='#/Informatica'"
            />
          </ul>
        </div>
      </section>
      <section>
        <section
          style="
            margin: 10px;
            border-color: white;
            border-radius: 10px;
            max-width: 500px;
            width: 90wh;
            border-width: 2px;
            font-size: 20px;
          "
        >
          Присоединяйтесь в мою группу тг для обсуждения решения задач и обычных бесед.
          Всех был бы рад видеть)
          <button style="border-width: 0px !important">
            <a href="https://t.me/ogerules" style="color: green !important"
              >https://t.me/ogerules</a
            >
          </button>
        </section>
      </section>
    </main>
  </div>
</template>

<style>
* {
  color: #cccccc;
}
</style>
