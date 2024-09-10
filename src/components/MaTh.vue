<template>
  <header
    class="sticky top-0 p-5"
    style="
      z-index: 100;
      min-width: 320px;
      width: 100%;
      background-color: rgb(119, 0, 255);
      justify-content: center;
      height: 60px;
    "
  >
    <ul class="catss">
      <a href="#">
        <img
          alt="Справка"
          src="../images/OUT.png"
          style="height: 30px; width: 30px; float: left"
        />
      </a>
      <section>
        <a
          class="tex"
          style="font-family: cursive; color: white; margin-left: -2%; font-size: 25px"
          >Математика</a
        >
      </section>
      <button
        style="
          background-color: white;
          color: black;
          width: 90px;
          height: 50px;
          position: fixed;
          top: 10px;
          right: 10px;
          border-radius: 10px;
          margin: -4px;
        "
        class="button;flex"
        onclick="window.location.href='/#/Math/MathVoprosy'"
      >
        Задания
      </button>
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

          text-align: justify; /* Выравнивание по ширине */
        "
      >
        <grid style="min-width: 200px">
          <div style="min-width: 200px">
            <div
              style="
                font-weight: bold;
                font-size: 25px;
                text-align: center;
                font-weight: bold;
              "
            >
              Основные правила:
            </div>
            <section style="max-height: 300px; position: sticky">
              <div style="z-index: 90; margin: 5px" id="yandex_rtb_R-A-11699635-7"></div>
            </section>
            <section style="font-weight: bold; font-size: 23px">Площади фигур</section>

            S треуг=1/2*h(Высота(90* к основанию))*a(основание) ИЛИ 1/2*a*b(Сторона у угла
            альфа)*sina<br />
            P труег=a+b+c<br />
            S ромба,паралелограмма,<br />
            трапеции=1/2*d1*d2*sina<br />
            S паралелограмма= a*h ИЛИ a*b*sina<br />
            S ромба=1/2*d1*d2<br />
            S прямоугольника=a*b<br />
            S квадр.=a^2 ИЛИ 1/2*d^2<br />
            S трапеции=1/2*(a+b)*h<br /><br />
            Теперь я хочу прикрепить фото, которое поможет вам в будущем разобраться с
            sina,cosa и т.д. Просто сохраните на будущее.<br /><br />
            <section>
              <img
                class="imgg"
                alt="Справка"
                src="C:/Users/Root/oge/src/images/l.jpg"
              /><br />
            </section>
            Вот ссылка на видео по тому, как ориентироваться в радианах<br />
            <a
              style="color: blue"
              href="https://yandex.ru/video/touch/preview/17434072524027311061?parent-reqid=1704312530649163-7627308056124575906-balancer-l7leveler-kubr-yp-sas-33-BAL-1356&text=%D0%BA%D0%B0%D0%BA+%D0%BE%D1%80%D0%B8%D0%B5%D0%BD%D1%82%D0%B8%D1%80%D0%BB%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D1%82%D1%80%D0%B8%D0%B3%D0%BE%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9+%D0%BE%D0%BA%D1%80%D1%83%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8"
              >Нажми на меня</a
            ><br />
            <br />
            <section style="font-weight: bold; font-size: 23px">Вероятность:</section>

            Находится, как отношение (деление) того, что надо найти на общее количество.
            Дополнительная информация Все остальное, можно найти на роликах на ютубе.<br />
            <br />

            <section>
              <img
                class="imgg"
                alt="Справка"
                src="C:/Users/Root/oge/src/images/д.jpg"
              /><br />
            </section>
            Окружность-360градусов<br /><br />
            Радиус- расстояние от центра окружности до её края (круга), если просто
            обьяснять.<br /><br />
            Диаметр-расстояние от одной части круго до другой, проходящей через центр.
          </div>
        </grid>
      </div>
    </a>
    <!-- Контейнер для рекламы -->
    <section style="position: sticky"><div id="yandex_rtb_R-A-11699635-2"></div></section>
  </main>
</template>
<style>
section {
  display: grid;
  text-align: center;
  place-items: center;
  justify-content: center;
  align-items: center; /* Выравнивание по вертикали */
}
* {
  color: #cccccc;
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
<style>
fonttt {
  text-align: justify; /* Выравнивание по ширине */
}
</style>
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
