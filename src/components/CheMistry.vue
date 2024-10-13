<style>
imgg {
  border-width: 2px;
  border-color: rgb(82, 82, 255) !important;
}
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
          >Химия</a
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
        onclick="window.location.href='/#/Chemistry/ChemVoprosy'"
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
              Основные правила:
            </div>

            Для начала, поговорим о превых заданиях ОГЭ по Химии.<br />
            <section style="font-weight: bold; font-size: 23px">
              <br />
              Электронные уровни<br />
            </section>
            Это очень легкая тема. И я думаю, при желании, это и в школе можно понять и
            видос посмотреть. Оставляю ссылку на афигенного учителя химии.<br />
            <a
              href="https://www.youtube.com/watch?v=gxABFeULId4"
              style="color: green !important"
              >Нажми на меня</a
            ><br />
            <br />А теперь пойдут темы в разнобой. Просто выпишите себе правила.<br /><br />
            <section style="font-weight: bold; font-size: 23px">Цвета осадков</section>
            <br />
            Ca,Mg,Be,Al,Zn,Pb-в основном, белые.<br />
            CaCO3;BaSO4-мелкокристалические<br />
            AgCl-Белый творожистый<br />
            Fe(OH)2-Серо-зеленный<br />
            Fe(OH)3-Бурый<br />
            Cu(OH)2-Голубой<br />
            Cu2O-Красный<br />
            AgBr-Бержевый<br />
            Ag2Cr2O7-Красный<br />
            BaCrO4-Желтый<br />
            BaSO3-Белый<br />
            AgI,Ag3PO4,PbI-Желтые т.к ёд<br />
            AgS,PbS2,CuS2,CuO,FeO-Черные<br />
            Cr2O3,Cr(OH)3-Зеленыe<br />
            Fe2O3,MnO2-Коричневый<br /><br />
            <section style="max-height: 300px; position: sticky">
              <div style="z-index: 90; margin: 5px" id="yandex_rtb_R-A-11699635-7"></div>
            </section>
            <section style="font-weight: bold; font-size: 23px">
              Классификация Гидроксидов
            </section>

            1)Основные (Meталл^+1+2степень окисления)<br />
            NaOH<br />
            Ca(OH)2<br />
            2)Кислотные (Там, гдe есть буква H)<br />
            3)Амфотерные(Мет^+3+4)<br />
            Al(OH)3<br />
            Zn(OH)2<br /><br />
            <section style="font-weight: bold; font-size: 23px">
              Классификация Оксидов
            </section>

            1)Основные (Meт^+1+2степень окисления)<br />
            NaOH<br />
            Ca(OH)2<br />
            2)Кислотные (Там, гдe есть буква H)<br />
            3)Амфотерные(Мет^+3+4)<br />
            Al(OH)3<br />
            Zn(OH)2<br />
            <section style="font-weight: bold; font-size: 23px">Теория</section>
            На 2 месте > электроотрицательные элементы .<br />
            Катод + Анод-. Диссациация распад вещества на ионы при растворении.<br />
            Неэлектролиты- оксиды.<br />
            Сильные электролиты- соли, основания кроме (NH4OH) и HCL,HBr.HI,<br />KClO3,H2SO4,HNO3.<br />
            Слабые- остальные. <br />
            <section style="font-weight: bold; font-size: 23px">
              <br />
              Задания по таблице Менделеева
            </section>

            Заряд ядра больше чем ниже и правее элемент.<br />
            Число заполненных энергетических уровней тем больше чем ниже элемент<br />
            Число электронов на внешнем уровне тем больше, чем правее в
            табл.Менделеева.<br />
            R атома чем ниже, тем больше.Чем правее, тем меньше.<br />
            Восстановительные свойства чем ниже в таблице тем больше.Чем правее, тем
            меньше.<br />
            Окислительные свойства Чем ниже, тем меньше. Чем правее, тем бльше.<br />
            Высшая степень окисления увеличивается направо.<br />
            Металлические свойства тем больше, чем ниже и правее элемент.<br />
            Немет свойства наоборот.<br />
            <br />
            <section style="font-weight: bold; font-size: 23px">Задания на в-ва</section>

            Химический элемент- составная часть сложного вещества. <br />
            Простое вещество- S,Mg и т.д смешивают с чем -то. <br />
            Химическое вещество - что- то из чего- то получается.<br /><br />
            <section style="font-weight: bold; font-size: 23px">Связи</section>
            Ионная связь это мет + немет. <br />
            Коваленты связь- с неметаллами только:<br />
            1)Неполярная-1 элемент(N2,Na)<br />
            2)Полярная->1 элемента.<br />
            Метал связь- простое в -во металл.<br />
            Химическая связь-связывает атомы.<br /><br />
            <section style="font-weight: bold; font-size: 23px">Решетки</section>
            Ионная кр. решетка у солей, оксидов, гидроксидов металла.<br />
            Атомная кр. реш:C,B,Si,Al2O3,SiO2.<br />
            Молекулярная: O2,H2,Cl2,N2,Br2,H2O,CO2,KCl,S3 P4 I2<br />
            Металлическая: металлы, сплавы.<br /><br />
            <section style="font-weight: bold; font-size: 23px">Доп инфа</section>
            Двухатомные элементы: N2,O2,F2,Cl2,<br />H2,Br2,I2.<br />
            Трехатомные: O3.<br /><br />
            <section style="font-weight: bold; font-size: 23px">Оксиды</section>
            Cолеобразующие оксиды: С металлами.<br />
            Неcолеобразующие: Со, NO, NO2. <br /><br />
            <section style="font-weight: bold; font-size: 23px">Реакции</section>
            Экзатермич реакция- выделение тепла.<br />
            Эндотермическая -поглощение тепла. <br />
            Реакция нейтрализации: основание + кислота= соль + вода.<br />
            Реакция ионного обмена: сокращение элементов.<br />
            <section style="font-weight: bold; font-size: 23px">Справка</section>
            Нейтроны=массе элемента- количество протонов.<br />
            Протоны= электронам= номеру элемента.<br /><br />
            <section style="font-weight: bold; font-size: 23px">
              Степени окисления некоторых элементов по умолчанию
            </section>
            O^-2,K^+1,Na^+1,H^+1,Be^2.<br /><br />
            <section style="font-weight: bold; font-size: 23px">
              Нестабильные кислоты
            </section>
            H2CO3<br />
            H2SO3<br /><br />
            <section style="font-weight: bold; font-size: 23px">
              Задачи на моли. Примеры решения
            </section>
            <section>
              <img class="imgg" src="C:/Users/Root/oge/src/images/н.jpg" alt="Справка" />
            </section>
            <section style="max-height: 300px; position: sticky">
              <div style="z-index: 90; margin: 5px" id="yandex_rtb_R-A-11699635-3"></div>
            </section>

            <section style="font-weight: bold; font-size: 23px">
              Формулы из задач(через МОЛИ).
            </section>
            n(кол-во в-ва)=m(масса)/M(Молярная масса(сумма из табл.менделеева))<br />
            n=V(Обьем)/Vm(22.4 или молярный обьем).<br />
            Vm=V/n<br />
            W(массовая доля в-ва)=mв-ва/mр-ра*100<br />
            mв-ва+mр-ля=mр-ра<br />
            mв-ва=W*mр-ра/100<br />
            В чем измеряется<br />
            n(моль)<br />
            M(гр/моль)<br />
            V(л)<br />
            Vm(л/моль)<br /><br />
            <section>
              <img
                class="imgg"
                src="C:/Users/Root/oge/src/images/Kisl.jpg"
                alt="Справка"
              />
            </section>
            <br />
            <section style="font-weight: bold; font-size: 23px">
              Химические свойства основных классов неорганических соеденений
            </section>

            1)Реакции обмена<br />
            1.Оксид мет+ кислота=соль+вода<br />
            2.Основание+кислота=<br />соль+вода<br />
            3.Соль+кислота=соль+<br />кислота новая. Условие:образование осадка <br />
            4.Соль1+соль2=соль3+соль4. Условие:образование осадка<br />
            5.Соль+щелочь=соль+<br />нераствор.основание. <br />
            Условие:образование осадка<br />
            6.Щелочь+оксид неметалла=соль+вода<br />
            7.Вода+оксид металла=основание.<br />
            8.Амфотерный оксид+кислота=соль+вода<br />
            9.Амотерный оксид+основный оксид=соль<br />
            10.Кислотный оксид+щелочь=соль+вода<br />
            11.кисл.оксид+щелочь=соль и вода.<br />
            2)Реакции замещения<br />
            1.Мет+кислота=соль+водород Условие-метал до Н в табл. Активности.<br />
            2.Соль+мет=соль+мет Условие-металл активнее металла в соли.<br />
            3)Соеденения<br />
            1.Основный оксид+вода=щелочь Условие-в реакцию вступают оксиды щел и
            щел-земельных металлов.<br />
            2.Кислотный оксид+вода=кислота (кроме Sio2)<br />
            3.Мет+неметалл=соль<br />
            4)Разложения<br />
            1.Нерастворимые основания=оксид мет+вода. Условие: температура<br />
            2.Соль=оксид мет+оксид немет. Условие:Температура<br />
            3.Нестабильная кислота=кислотный оксид+вода<br />
            Вот ОСНОВНЫЕ формулы, которые нужно знать. Также вам будут встречаться примеры
            с концентрированными и неконцентрированными, разбавленными и неразбавленными
            в-ми. Эти моменты я не выписывал. Т.к важно знать самое главное. А то не очень
            важно. Оно вряд ли встретится на экзамене. Мне не встретилось. Но все же суть
            там надо понять на всякий случай.<br /><br />
            <img
              class="imgg"
              src="C:/Users/Root/oge/src/images/Color.png"
              alt="Справка"
              style="padding-bottom: 20px"
            />
          </div>
        </grid>
      </div>
    </a>
    <!-- Контейнер для рекламы -->
    <section style="position: sticky"><div id="yandex_rtb_R-A-11699635-2"></div></section>
  </main>
</template>
