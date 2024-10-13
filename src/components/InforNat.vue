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
      } else {
        console.error("Рекламный контейнер 1 не найден в DOM");
      }

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

      const adContainer3 = document.getElementById("yandex_rtb_R-A-11699635-3");
      if (adContainer3) {
        window.yaContextCb.push(() => {
          Ya.Context.AdvManager.render({
            renderTo: "yandex_rtb_R-A-11699635-3",
            blockId: "R-A-11699635-3",
          });
        });
      } else {
        console.error("Рекламный контейнер 3 не найден в DOM");
      }

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://an.yandex.ru/system/context.js";
      script.async = true;
      document.head.appendChild(script);
    });
  },
};
</script>
<script setup>
import { onMounted } from "vue";

function handleKeydown(event) {
  if (event.key === "Escape") {
    window.location.href = "#/";
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});
</script>

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
          style="font-family: cursive; color: white; font-size: 25px; margin-left: -2%"
          >Информатика</a
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
        onclick="window.location.href='/#/Informatica/InfVoprosy'"
      >
        Задания
      </button>
    </ul>
  </header>
  <body>
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
            <div style="font-weight: bold; text-align: center">Основные правила:</div>
            <div
              style="font-weight: bold; text-align: justify; /* Выравнивание по ширине */"
            >
              Немного обо мне<br />
            </div>
            Данную теорию я хочу преподносить на задачах и видео т.к и мне, и вам, скорее
            всего, так будет комфортнее и понятнее.<br />Видео, в основе своей, записывал
            я сам.<br />
            <section style="font-weight: bold; font-size: 23px">
              ПЕРВОЕ ЗАДАНИЕ<img
                class="imgg"
                alt="Справка"
                src="C:/Users/Root/oge/src/images/1.png"
              />
            </section>
            <br />
            <div style="text-align: justify; /* Выравнивание по ширине */">
              Тут важно знать следующее: 1симв=32 бит, 1 байт=8 бит, пробела тоже
              считаются за символы.<br />
              Мы убираем какое-то слово и зачищаем от него следы. Это запятая и пробел.
              Убираем их. Это просто правило такое.<br />
              Теперь начинаем решать.<br />
              1) Переводим байты в биты т.к будем и всегда надо отталкиваться от того,
              насколько меньше/больше стало слово.А меньше оно стало на 28 БАЙТ. <br />
              Следовательно, надо перевести байты в биты. Это = 224 бита.<br />
              2)Теперь делим 224 на 32 чтобы найти кол-во символов, которое стерлось
              вместе с пробелом и запятой по правилу выше.<br />
              3)Получили ответ: 7 при делении. 7-запятая(1)-пробел(1)=5.<br />
              4)Ищем слово с 5 символами. ТЫКВА. Это и есть ответ!
            </div>
            <section style="max-height: 300px; position: sticky">
              <div style="z-index: 90; margin: 5px" id="yandex_rtb_R-A-11699635-7"></div>
            </section>
            <section style="font-weight: bold; font-size: 23px">ВТОРОЕ</section>
            ЗАДАНИЕ: Вася шифрует русские слова, записывая вместо каждой буквы её номер в
            алфавите (без пробелов). Номера букв даны в таблице:
            <section>
              <br />
              <img class="imgg" alt="Справка" src="C:/Users/Root/oge/src/images/2.jpg" />
            </section>
            <br />

            Рассмотрим первый код 20335. Двадцать (20) мы может расшифровать только, как
            букву Т.<br />
            Следующие две тройки (33) можно расшифровать, как две буквы В подряд, а можно,
            как букву Я.<br />
            Значит, этот шифр можно расшифровать разными способами.<br />

            Рассмотрим следующий код 21120.<br />
            Первое сочетание (21) можно расшифровать, как 2 и 1 - Б, A, а можно и как 21 -
            У.
            <br />Следовательно, данный код можно расшифровать разными способами.<br />

            Рассмотрим следующий код 31321.<br />
            Сочетание 31 мо рассматривать, как 3 и 1, а можно, как 31.<br />
            Поэтому шифр не подходит.<br />

            Остался последний шифр 51201.<br />
            Убедимся, что данный код нам подходит. 51 - это 5 и 1, т.е. Д и А.<br />
            Двадцать 20 - это только буква Т. Единица 1 - это A.<br />

            Ответ: ДАТА
            <br /><br />
            Само по себе, 2 задание очень простое. Просто надо чуть подумать.<br />
            Остальные примеры 2 задания можно в инете найти. Не особо вижу смысл их
            разбирать. Они очень легкие.
            <br />
            От себя оставлю ссылку на хорошее обьяснение 2 задания.<br />
            <a
              style="color: green !important"
              href="https://youtu.be/Inuo7DnzfO0?si=03UEMt3OvpLnTCbH"
              >Нажми на меня</a
            ><br />

            <section style="font-weight: bold; font-size: 23px">ТРЕТЬЕ</section>

            <section>
              <img class="imgg" alt="Справка" src="C:/Users/Root/oge/src/images/3.png" />
            </section>
            <br />
            Чтобы выполнить это задание, вам надо понять суть картинки ниже.<br /><br />
            <section>
              <img
                class="imgg"
                alt="Справка"
                src="C:/Users/Root/oge/src/images/ur_22_03.jpg"
              />
            </section>
            <br />
            Конъюнкция это можно принять за умножение. Или за слияние линий на
            прямой(1*1=1,1*0=0 и т.д).<br />
            Дизъюнкция это можно принять за сложение. или за всю область на прямой (1+1=1
            т.к не может быть больше 1, 1+0=1, 0+0=0).<br />
            Отрицание -противоположность. Противоположность в инф-ке знаку больше- знак
            меньше или равно.<br />
            В математике все наоборот. Не меняше или равно, а меньше.<br />
            т.к это точная наука. Запомните это чтобы проще запоминать и не путаться.<br />
            <br />
            И еще надо запомнить последовательность операций.<br />
            1) выполняется действие в скобках.<br />
            2)НЕ 3)Конъюнкция 4)Дизъюнкция
            <br />
            Теперь давайте рассмотрим пример.<br />
            1 выполняем НЕ т.к нету скобок.<br />
            НЕ(X меньше или равно 10) равно (X больше 10).<br />
            НЕ(X больше 16) равно (X меньше или равно 16 (т.к неточная наука)).<br />
            Последняя операция. Надо найти слияние линий .<br /><br />
            <section>
              <img
                class="imgg"
                src="C:/Users/Root/oge/src/images/photo_2024-01-21_14-31-22.jpg"
                style="width: 600px"
              />
            </section>
            <br />

            <section style="font-weight: bold; font-size: 23px">ЧЕТВЕРТОЕ</section>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <section>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/LuooBybv4lA?si=FUUWcQ2Jg8HsmaEF"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </section>
            <br />

            <section style="font-weight: bold; font-size: 23px">ПЯТОЕ</section>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <section>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/4tQ2a1L5y0I?si=mUHmlEkpDCNCc97H"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </section>
            <br />
            <section style="max-height: 300px; position: sticky">
              <div style="z-index: 90; margin: 5px" id="yandex_rtb_R-A-11699635-7"></div>
            </section>

            <section style="font-weight: bold; font-size: 23px">ШЕСТОЕ</section>
            Все команды кумира, которые надо знать, описанны в видео. <br />Я не
            программировал на pascal, piton.<br />
            <section>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/h98cI_njhtk?si=JSu4x2bqWmWnJ5wg"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </section>
            <br />

            <section style="font-weight: bold; font-size: 23px">СЕДЬМОЕ</section>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <section>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/dzPKwfTaKhs?si=quPRi0EVIFNy_K9X"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </section>
            <br />
            Хочу обратить внимание, что файлы определяются по расширению: ?.docx или .doc,
            .txt и т.д<br />
            Иногда работают по друугой формуле т.к той, что в видео описали
            недостаточно:<br />
            Протокол://адрес сайта или сервера/каталог/подкаталог/подкатолог/файл с
            расширением.<br />
            Но это усложненная версия.
            <br />

            <section style="font-weight: bold; font-size: 23px">ВОСЬМОЕ</section>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <section>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/fl8Z4aJ7NJY?si=X-kWiMDB-RR3UMed"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </section>
            <br />

            <section style="font-weight: bold; font-size: 23px">ДЕВЯТОЕ</section>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <section>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/6_3y8cq7yaw?si=PaTU6mJZBBAR3Wta"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/SOt9bksT_bE?si=bxM1wpMdaJ8XoEs7"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </section>
            <br />

            <section style="font-weight: bold; font-size: 23px">ДЕСЯТОЕ</section>
            Чтобы выполнить это задание, вам надо понять суть, которая объясняется на
            видео снизу.<br />
            <section>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/DI2qkSKnQtk?si=5DOQQki_riFMJUdv "
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
              <br />
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/_bXkZzhEmL0?si=ts3eZs5vUxUktT3F"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              >
              </iframe>
            </section>
            <br />

            <section style="font-weight: bold; font-size: 23px">EXEL</section>
            Наверное, самое страшное задание по инфе. Все его боятся и по нему слагают
            легенды.<br />
            Основные правила построянеия показаны на фото ниже.<br />
            <section>
              <img
                class="imgg"
                src="C:/Users/Root/oge/src/images/exel.jpg"
                style="padding-bottom: 20px"
              />
            </section>
            <br />
          </div>
        </grid>
      </div>
    </a>
    <!-- Контейнер для рекламы -->
    <section style="position: sticky"><div id="yandex_rtb_R-A-11699635-2"></div></section>
  </body>
</template>

