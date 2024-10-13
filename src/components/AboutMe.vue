<style>
section {
  display: grid;
  text-align: center;
  place-items: center;
  justify-content: center;
  align-items: center; /* Выравнивание по вертикали */
}
</style>
<script>
export default {
  mounted() {
    this.$nextTick(() => {
      const adContainer1 = document.getElementById("yandex_rtb_R-A-11699635-7");
      if (adContainer1) {
        if (!window.yaContextCb) {
          window.yaContextCb = [];
        }
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            renderTo: "yandex_rtb_R-A-11699635-7",
            blockId: "R-A-11699635-7",
          });
        });

        const adContainer2 = document.getElementById("yandex_rtb_R-A-11699635-2");
        if (adContainer2) {
          window.yaContextCb.push(() => {
            Ya.Context.AdvManager.render({
              renderTo: "yandex_rtb_R-A-11699635-2",
              blockId: "R-A-11699635-2",
            });
          });
        } else {
          console.error("Рекламный контейнер 2 не найден в DOM");
        }

        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://an.yandex.ru/system/context.js";
        script.async = true;
        document.head.appendChild(script);
      } else {
        console.error("Рекламный контейнер 1 не найден в DOM");
      }
    });
  },
};
</script>

<script setup>
import { onMounted } from "vue";

function handleKeydown(event) {
  if (event.key === "Escape") {
    window.location.href = "#";
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});
</script>

<template>
  <header
    class="sticky top-0 p-5 bg-white"
    style="
      z-index: 100;
      min-width: 320px;
      width: 100wh;
      background-color: rgb(119, 0, 255);
      justify-content: center;
      height: 60px;
    "
  >
    <ul class="catss">
      <a href="#">
        <img
          src="../images/OUT.png"
          alt="Справка"
          style="height: 30px; width: 30px; float: left"
        />
      </a>
      <section>
        <a class="tex" style="font-family: cursive; color: white; font-size: 25px"
          >ОГЭ и собеседов</a
        >
      </section>
    </ul>
  </header>
  <main>
    <a
      style="
        color: rgb(0, 0, 0);
        font-size: 19px;
        font-family: 'Times New Roman', Times, serif;
      "
    >
      <div
        class="margi"
        style="
          margin-top: 10px;
          font-size: 20px;
          font-family: 'Times New Roman', Times, serif;
        "
      >
        <grid style="min-width: 200px; width: 80%">
          <div style="min-width: 200px">
            <div
              style="
                font-weight: bold;
                font-size: 23px;
                text-align: center;
                font-weight: bold;
              "
            >
              Основная информация о ОГЭ и устном собеседовании
            </div>

            <div style="font-weight: bold; font-size: 23px">Немного обо мне<br /></div>
            <section style="max-height: 300px; position: sticky">
              <div style="z-index: 90; margin: 5px" id="yandex_rtb_R-A-11699635-7"></div>
            </section>
            Я ученик колледжа. В 2024 году, учусь в колледже на 3 курсе. Также, как и
            почти все Россияне, писал ОГЭ. Среди предметов, которые я выбрал, были: Химия,
            Информатика, Русский, Математика. Среди них я написал все экзамены на 5, кроме
            о математики.<br />
            Зачем я пишу эту статью? Помнится мне то время, когда я понятия не имел, что и
            как будет проходить в 9 классе из экзаменов. И, собственно говоря, ради того,
            чтобы рассказать, что вас ожидает из экзаменов в будущем и как это будет
            проходить, я и пишу эту статью. Ну как статью. Я создал свой сайт при помощи
            инфы из интернета и советов знающих людей из нашей группы. За что им огромное
            спасибо. Также я выложу ВСЮ теорию, с помощью которой я написал экзамены на 5
            и 4. Поэтому, вам будет намного проще подготовиться к экзамену. Также, выложу
            учебники, по которым я готовился к экзаменам.<br />
            Насчет устного собеседования я могу сказать, что к нему стоит подготовиться
            только за день до этого дня. Почему? Скорее всего, перед устным
            собеседованием, вам скинуть варианты. И не смогут его рассказать только те,
            кто не может в прямом смысле читать! И поверьте, такие люди в 9 классе, пускай
            и не в вашем, есть. Их обычно оставляют на 2 год. У всех же других людей есть
            все шансы сдать. Главное- понять принцип описания картинок, а остальное -
            фигня. ОГЭ у нас проходило в другой школе. Мы садились в автобус и ехали к
            ней. Там проходили через металлоискатель и садились писать ОГЭ. Все
            металлические вещи мы вытаскивали и показывали. Даже ремень. Некоторые
            умудрялись списать.<br />
            Если вы написали ОГЭ на 3, а итоговая по предмету 4, в аттестат идет 4.
            Средний балл можно найти в инете как считать. В колледж люди поступают именно
            по среднему баллу. Поступает определенное количество человек, которое написано
            на сайте колледжа. Приходить, чтобы узнать всю инфу о колледже надо в день
            открытых дверей. Все написано на сайте колледжа.<br />
            Насчет ОГЭ хочу сказать, что варианты там гораздо проще, чем на подготовке ОГЭ
            в школе, либо мне просто такие попались, хотя я у одноклассников спрашивал, им
            тоже легкие попались.<br />
            Ну собственно, это все, что я хотел написать во вступлении.<br /><br />
            Вот самые лучшие сборники для подготовки к ОГЭ:<br />
            Русский язык — И.П. Цыбулько<br />
            Физика — А. И. Черноуцан<br />
            Обществознание — П.А. Баранов<br />
            Химия — Ю.Н. Медведев<br />
            География — Атласы издательства «Дрофа»<br />
            Математика — И.В. Ященко<br />
            Биология — Г.Н. Панинка, Е.В. Левашко<br />
            История — И.А. Артасов<br />
            Английский язык — Л.М. Гудкова, О.В. Терентьева<br />
            Информатика — Д.М. Ушаков<br />
            Литература — Л.В. Новикова
          </div>
        </grid>
      </div>
    </a>
    <!-- Контейнер для рекламы -->
    <section style="position: sticky"><div id="yandex_rtb_R-A-11699635-2"></div></section>
  </main>
</template>
