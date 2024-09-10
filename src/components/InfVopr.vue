<template>
  <a href="#/Informatica/">
    <img
      src="../images/OUT.png"
      class="sticky"
      style="height: 30px; width: 30px; float: left; margin: 10px"
    />
  </a>
  <div>
    <center><h1 class="title">Задания по информатике:</h1></center>
    <center>
      <div class="flex flex-wrap justify-center items-center">
        <button
          class="e-button circle"
          v-for="(task, index) in tasks"
          :key="index"
          @click="
            showTask(index);
            limitHeight;
          "
        >
          {{ index + 1 }}
        </button>
      </div>

      <div id="yandex_rtb_R-A-11699635-7" class="sticky-ad;hello"></div>
    </center>
    <div v-if="currentTask !== null">
      <center>
        <div
          v-for="(subTask, subTaskIndex) in tasks[currentTask].subTasks"
          :key="subTaskIndex"
        >
          <div v-html="subTask.question"></div>

          <div
            style="
              background-color: white !important;
              margin: 20px;
              border-width: 1px;
              border-radius: 30px;
              color: black;
            "
            v-if="showAnswer[currentTask][subTaskIndex]"
          >
            <h style="font-size: 17px"
              >Ответ:
              <span
                style="font-size: 17px; color: black !important"
                v-html="subTask.text"
              ></span
            ></h>

            <button
              class="butto"
              style="
                background-color: green;
                border-radius: 50px;
                color: white;
                margin: 10px;
                padding: 7px;
                border-color: black;
                border-width: 1.5px;
              "
              @click="toggleAnswer(currentTask, subTaskIndex)"
            >
              Скрыть ответ
            </button>
          </div>
          <div v-else>
            <button
              class="but"
              style="
                background-color: #d41613;
                border-radius: 50px;
                margin: 3px;
                padding: 7px;
                color: white;
              "
              @click="toggleAnswer(currentTask, subTaskIndex)"
            >
              Показать ответ
            </button>
          </div>
        </div>
      </center>
    </div>
  </div>
  <div style="position: sticky" id="yandex_rtb_R-A-11699635-2"></div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1 (номера из учебников для подготовки) (номера из учебников для подготовки)</h></strong></center>
                  <p >В одной из кодировок Unicode каждый символ кодируется 16 битами. Вова написал текст (в нем нет лишних пробелов):
<br/>
«Школьные предметы: ОБЖ, химия, физика, алгебра, биология, география, литература, информатика».
<br/>
Учение удалил из списка название одного предмета, а также лишние запятую и пробел  — два пробела не должны идти подряд.
<br/>
При этом размер нового предложения в данной кодировке оказался на 16 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название предмета.</p><br/>

</div></center>
                `,
              text:
                "Поскольку один символ кодируется двумя байтами, из текста удалили 8 символов. Заметим, что лишние запятая и пробел занимают четыре байта. Значит, название предмета, которое удалили из списка, должно состоять из шести букв, поскольку (16 − 4) : 2  =  6 символов. Из всего списка только одно название предмета состоит из 6 букв  — физика.  физика.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1.2</h></strong></center>
                  <p >В кодировке UTF-32 каждый символ кодируется 32 битами. Артем написал текст (в нем нет лишних пробелов):
<br/>
«Врач, актер, акушер, генетик, издатель, кардиолог  — профессии».
<br/>
Ученик вычеркнул из списка название одной из профессий. Заодно он вычеркнул ставшие лишними запятые и пробелы  — два пробела не должны идти подряд.
<br
При этом размер нового предложения в данной кодировке оказался на 44 байта меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название профессии.</p><br/>

                `,
              text:
                "Поскольку один символ кодируется четырьмя байтами, из текста удалили 11 символов. Заметим, что лишние запятая и пробел занимают восемь байтов. Значит, название профессии, которое удалили из списка, должно состоять из 9 букв, поскольку (44 − 8) : 4  =  9 символов. Из всего списка только одно название профессии состоит из 9 букв  — кардиолог.  кардиолог.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1.3</h></strong></center>
                  <p >В одной из кодировок Unicode каждый символ кодируется 16 битами. Вова написал текст (в нем нет лишних пробелов):
<br/>
«Алый, синий, фуксия, красный, янтарный, оранжевый, фиолетовый, канареечный, баклажановый  — цвета».
<br/>
Ученик вычеркнул из списка название одного цвета. Заодно он вычеркнул ставшие лишними запятые и пробелы  — два пробела не должны идти подряд.
<br/>
При этом размер нового предложения в данной кодировке оказался на 12 байт меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название цвета.

</p>

</div></center>
                `,
              text:
                "Поскольку один символ кодируется 16 битами, следовательно, один символ кодируется двумя байтами, из текста удалили 12 байт, следовательно, из текста удалили 6 символов. Заметим, что также удалили лишние запятую и пробел, которые занимают четыре байта. Значит, название цвета, которое удалили из списка, должно состоять из четырех букв, поскольку (12 − 4) : 2  =  4 символа. Из всего списка только одно название цвета состоит из 4 букв  — алый. алый.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1.4</h></strong></center>
                  <p >В кодировке КОИ-8 каждый символ кодируется 8 битами. Андрей написал текст (в нем нет лишних пробелов):
<br/>
«Обь, Лена, Волга, Москва, Макензи, Амазонка  — реки».
<br/>
Ученик вычеркнул из списка название одной из рек. Заодно он вычеркнул ставшие лишними запятые и пробелы  — два пробела не должны идти подряд.
<br/>
При этом размер нового предложения в данной кодировке оказался на 8 байтов меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название реки.</p><br/>

</div></center>
                `,
              text:
                "Поскольку один символ кодируется одним байтом, из текста удалили 8 символов. Заметим, что лишние запятая и пробел занимают два байта. Значит, название реки, которое удалили из списка, должно состоять из 6 букв. Из всего списка только одно название реки состоит из 6 букв  — Москва.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1.5</h></strong></center>
                  <p >В кодировке UTF-32 каждый символ кодируется 32 битами. Коля написал текст (в нем нет лишних пробелов):
<br/>
«Эри, Айыр, Гурон, Восток, Онтарио, Виннипег  — озера».
<br/>
Ученик вычеркнул из списка название одного из озер. Заодно он вычеркнул ставшие лишними запятые и пробелы  — два пробела не должны идти подряд.
<br/>
При этом размер нового предложения в данной кодировке оказался на 20 байтов меньше, чем размер исходного предложения. Напишите в ответе вычеркнутое название озера.</p><br/>

</div></center>
                `,
              text:
                "Поскольку один символ кодируется четырьмя байтами, из текста удалили 5 символов. Заметим, что лишние запятая и пробел занимают восемь байтов. Значит, название озера, которое удалили из списка, должно состоять из 3 букв, поскольку (20 − 8) : 4  =  3 символа. Из всего списка только одно название озера состоит из 3 букв  — Эри.",
            },
          ],
        },
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2 (номера из учебников для подготовки)</h></strong></center>
                 <br/>

<image src="./public/tasks/104.bmp"></image></div></center>
                `,
              text:
                "Сопоставляя символы их кодам, расшифруем сообщение: *@@~**~*~  =  ЛИМОН.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2.2</h></strong></center>


<image src="./public/tasks/105.bmp"></image></div></center>
                `,
              text:
                "Сопоставляя символы их кодам, расшифруем сообщение:  0101101100100110  =  АПГАИГ. Количество букв в исходной радиограмме: 6.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2.3</h></strong></center>
                  <br/>

<image src="./public/tasks/106.bmp"></image></div></center>
                `,
              text:
                "Сопоставляя символы их кодам, расшифруем сообщение:?©©©?©?  =  ЛАК. Ваш  нет ответа. Правильный  ЛАК",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2.4</h></strong></center>
                  <br/>

<image src="./public/tasks/107.bmp"></image></div></center>
                `,
              text: " ВИТЬ.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2.5</h></strong></center>
                 <br/>

<image src="./public/tasks/108.bmp"></image></div></center>
                `,
              text: "Правильный  НОС",
            },
          ],
        },
        // Добавьте остальные задания с subTasks
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 3 (номера из учебников для подготовки)</h></strong></center>
                  <p >Напишите наименьшее целое число x, для которого истинно высказывание:
<br/>
<br/>
НЕ (X < 2) И (X четное).
</p><br/>


                `,
              text:
                "(X >= 2) И (X четное). Значит, наименьшее число, для которого высказывание будет истинным  — 2.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 3.2</h></strong></center>
              <center><strong><h >Расположите химические элементы</h></strong></center>
                  <p >Напишите наибольшее целое число, для которого истинно высказывание:
<br/>
НЕ(Число > 10 000) И (Число нечетное).</p><br/>

</div></center>
                `,
              text: " 9 999.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 3.3</h></strong></center>
              <center><strong><h >Расположите химические элементы</h></strong></center>
                  <p >Напишите число X, для которого истинно высказывание:
<br/>
НЕ (X < 6) И (X < 7).</p><br/>

</div></center>
                `,
              text:
                "Логическое «И» истинно тогда, когда истинны оба высказывания. Запишем выражение в виде (X ≥ 6) И (X < 7). Значит, число, для которого высказывание будет истинным  — 6.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 3.4</h></strong></center>
              <center><strong><h >Расположите химические элементы</h></strong></center>
                  <p >Напишите наибольшее натуральное число x, для которого ИСТИННО высказывание
<br/>
(x < 5) ИЛИ НЕ (x > 3).

</p><br/>

</div></center>
                `,
              text:
                "Логическое «ИЛИ» истинно во всех случаях, кроме случая, когда ложны оба высказывания. Запишем выражение в виде (x < 5) ИЛИ (x <= 3). Значит, наибольшее число, для которого высказывание будет истинным  — 4.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 3.5</h></strong></center>
              <center><strong><h >Напишите наибольшее целое число x, для которого истинно высказывание:

НЕ (X нечетное) И НЕ (X >= 10).е</p><br/>

</div></center>
                `,
              text:
                "Запишем выражение в виде (X четное) И (X < 10). Значит, наибольшее число, для которого высказывание будет истинным  — 8.",
            },
          ],
        },
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4 (номера из учебников для подготовки)</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/109.bmp"></img></div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/110.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4.2</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/111.bmp"></img></div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/112.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4.3</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/113.bmp"></img></div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/114.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4.4</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/115.bmp"></img></div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/116.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4.5</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/117.bmp"></img></div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/118.bmp"></img>',
            },
          ],
        },
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5 (номера из учебников для подготовки)</h></strong></center>
                  <p >У исполнителя Омега две команды, которым присвоены номера:<br/>

1. прибавь 5;
<br/>
2. умножь на b
<br/>
(b  — неизвестное натуральное число; b ≥ 2).
<br/>
Выполняя первую из них, Омега увеличивает число на экране на 5, а выполняя вторую, умножает это число на b. Программа для исполнителя Омега  — это последовательность номеров команд. Известно, что программа 12111 переводит число 6 в число 48. Определите значение b.</p><br/>

</div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/119.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5.2</h></strong></center>
                  <p >У исполнителя Сигма две команды, которым присвоены номера:
<br/>
1. прибавь 1;
<br/>
2. раздели на b
<br/>
(b  — неизвестное натуральное число; b ≥ 2).
<br/>
Выполняя первую из них, Сигма увеличивает число на экране на 1, а выполняя вторую, делит это число на b. Программа для исполнителя Сигма  — это последовательность номеров команд. Известно, что программа 12111 переводит число 50 в число 20. Определите значение b.</p><br/>

</div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/120.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5.3</h></strong></center>
                  <p>У исполнителя Омега две команды, которым присвоены номера:<br/>

1. прибавь 3;
<br/>
2. раздели на b
<br/>
(b  — неизвестное натуральное число; b ≥ 2).
<br/>
Выполняя первую из них, Омега увеличивает число на экране на 3, а выполняя вторую, делит это число на b. Программа для исполнителя Омега  — это последовательность номеров команд. Известно, что программа 11121 переводит число 30 в число 6. Определите значение b.</p><br/>

</div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/121.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5.4</h></strong></center>
                  <p >У исполнителя Омега две команды, которым присвоены номера:
<br/>
1. прибавь 2;
<br/>
2. умножь на b
<br/>
(b  — неизвестное натуральное число; b ≥ 2).
<br/>
Выполняя первую из них, Омега увеличивает число на экране на 2, а выполняя вторую, умножает это число на b. Программа для исполнителя Омега  — это последовательность номеров команд. Известно, что программа 11121 переводит число 4 в число 202. Определите значение b.</p>
</div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/122.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5.5</h></strong></center>
                  <p >У исполнителя Гамма две команды, которым присвоены номера:
<br/>
1. прибавь 3;
<br/>
2. умножь на b
<br/>
(b  — неизвестное натуральное число; b ≥ 2).
<br/>
Выполняя первую из них, Гамма увеличивает число на экране на 3, а выполняя вторую, умножает это число на b. Программа для исполнителя Гамма  — это последовательность номеров команд. Известно, что программа 11211 переводит число 1 в число 97. Определите значение b.</p><br/>

</div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/123.bmp"></img>',
            },
          ],
        },
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6 (номера из учебников для подготовки)</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/124.bmp"></img></div></center>
                `,
              text: " 4.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6.2</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/125.bmp"></img></div></center>
                `,
              text: " 4.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6.3</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/126.bmp"></img></div></center>
                `,
              text: " 3.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6.4</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/127.bmp"></img></div></center>
                `,
              text: " 6.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6.5</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/128.bmp"></img></div></center>
                `,
              text: " 7.",
            },
          ],
        },
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7 (номера из учебников для подготовки)</h></strong></center>
                  <p >Доступ к файлу math.doc, находящемуся на сервере obr.ru, осуществляется по протоколу https. Фрагменты адреса файла закодированы цифрами от 1 до 7. Запишите последовательность этих цифр, кодирующую адрес указанного файла в сети Интернет.
<br/>
1)  obr
<br/>
2)  /
<br/>
3)  .ru
<br/>
4)  .doc
<br/>
5)  ://
<br/>
6)  math
<br/>
7)  https</p><br/>

</div></center>
                `,
              text:
                "Напомним, как формируется адрес в сети Интернет. Сначала указывается протокол (как правило это «ftp» или «http»), потом «://», потом сервер, после «/», название файла указывается в конце. Таким образом, новый адрес расположения файла будет следующим: https://obr.ru/math.doc. Следовательно, ответ  — 7513264. 7513264.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7.2</h></strong></center>
                  <p >Доступ к файлу slon.txt, находящемуся на сервере circ.org, осуществляется по протоколу http. Фрагменты адреса файла закодированы буквами от А до Ж. Запишите последовательность этих букв, кодирующую адрес указанного файла в сети Интернет.

 
<br/>
A)  .txt
<br/>
Б)  ://
<br/>
B)  http
<br/>
Г)  circ
<br/>
Д)  /
<br/>
Е)  .org
<br/>
Ж)  slon</p>
</div></center>
                `,
              text:
                "Напомним, как формируется адрес в сети Интернет. Сначала указывается протокол (как правило это «ftp» или «http»), потом «://», потом сервер, затем «/», название файла указывается в конце. Таким образом, адрес будет следующим: http://circ.org/slon.txt. Следовательно, ответ ВБГЕДЖА.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7.3</h></strong></center>
                  <p > Доступ к файлу edu.txt, находящемуся на сервере htm.ru, осуществляется по протоколу http. Фрагменты адреса файла закодированы цифрами от 1 до 7. Запишите последовательность этих цифр, кодирующую адрес указанного файла в сети Интернет.

 <br/>

1)  htm
<br/>
2)  ://
<br/>
3)  /
<br/>
4)  http
<br/>
5)  .ru
<br/>
6)  .txt
<br/>
7)  edu</p><br/>

</div></center>
                `,
              text:
                "Напомним, как формируется адрес в сети Интернет. Сначала указывается протокол (как правило это «ftp» или «http»), потом «://», потом сервер, затем «/», название файла указывается в конце. Таким образом, адрес будет следующим: http://htm.ru/edu.txt. Следовательно, ответ 4215376.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7.4</h></strong></center>
                  <p >Почтовый ящик teacher находится на сервере shkola1.mos.ru. В таблице фрагменты адреса электронной почты закодированы цифрами от 1 до 6. Запишите последовательность цифр, кодирующую этот адрес.
                   <br/> 1)  @
<br/>
2)  .ru
<br/>
3)  shkola1
<br/>
4)  .
<br/>
5)  teacher
<br/>
6)  mos</p><br/>

</div></center>
                `,
              text:
                "Напомним, как формируется почтовый адрес в сети Интернет. Сначала указывается имя почтового ящика, потом «@», потом сервер, на котором находится почтовый ящик. Таким образом, искомый адрес будет следующим: teacher@shkola1.mos.ru.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7.5</h></strong></center>
                  <p >Доступ к файлу htm.txt, находящемуся на сервере com.ru, осуществляется по протоколу http. Фрагменты адреса файла закодированы буквами от А до Ж. Запишите последовательность этих букв, кодирующую адрес указанного файла в сети Интернет.

 
<br/>
А)  com
<br/>
Б)  http
<br/>
В)  /
<br/>
Г)  .txt
<br/>
Д)  .ru
<br/>
Е)  ://
<br/>
Ж)  htm</p><br/>

</div></center>
                `,
              text:
                "Напомним, как формируется адрес в сети Интернет. Сначала указывается протокол, потом «://», потом сервер, затем «/», название файла указывается в конце. Таким образом, адрес будет следующим: http://com.ru/htm.txt. Следовательно, ответ БЕАДВЖГ.",
            },
          ],
        },
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8 (номера из учебников для подготовки)</h></strong></center>

<image src="./public/tasks/129.bmp"></image></div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/130.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8.2</h></strong></center>
                  <br/>

<image src="./public/tasks/131.bmp"></image></div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/132.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8.3</h></strong></center>
                  <br/>

<image src="./public/tasks/133.bmp"></image></div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/134.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8.4</h></strong></center>
                  <br/>

<image src="./public/tasks/135.bmp"></image></div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/136.bmp"></img>',
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8.5</h></strong></center>
                  <br/>

<image src="./public/tasks/137.bmp"></image></div></center>
                `,
              text: '<img  alt="Справка" src="./public/tasks/138.bmp"></img>',
            },
          ],
        },
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9 (номера из учебников для подготовки)</h></strong></center>
                  <br/>

<image src="./public/tasks/139.bmp"></image></div></center>
                `,
              text: " 9.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9.2</h></strong></center>
                  <br/>

<image src="./public/tasks/140.bmp"></image></div></center>
                `,
              text: " 9.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9.3</h></strong></center>
                  <br/>

<image src="./public/tasks/141.bmp"></image></div></center>
                `,
              text: " 20.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9.4</h></strong></center>
                 <br/>

<image src="./public/tasks/142.bmp"></image></div></center>
                `,
              text: " 8.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9.5</h></strong></center>
                  <br/>

<image src="./public/tasks/143.bmp"></image></div></center>
                `,
              text: " 10.",
            },
          ],
        },
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10 (номера из учебников для подготовки)</h></strong></center>
                  <p >Среди приведенных ниже трех чисел, записанных в десятичной системе счисления, найдите число, сумма цифр которого в восьмеричной записи наименьшая. В ответе запишите сумму цифр в восьмеричной записи этого числа.
<br/>
55˅10, 83˅10, 91˅10.

</p><br/>

</div></center>
                `,
              text:
                "Переведем все числа в восьмеричную систему счисления:<br/>1.  5510 = 678, сумма цифр  — 6 + 7 = 158;<br/>2.  8310 = 1238 , сумма цифр  — 1 + 2 + 3 = 68;<br/>3.  9110 = 1338 , сумма цифр  — 1 + 3 + 3 = 78.<br/>Таким образом, наименьшей суммой цифр в восьмеричной записи числа является число 6.<br/> 6.<br/>",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10.2</h></strong></center>
                  <p >Среди приведенных ниже трех чисел, записанных в различных системах счисления, найдите наименьшее и запишите его в ответе в десятичной системе счисления. В ответе запишите только число, основание системы счисления указывать не нужно.
<br/>
39˅16, 75˅8, 111011˅2</p><br/>

</div></center>
                `,
              text:
                "Переведем все числа в десятичную систему счисления:<br/>1.  39˅16 = 57˅10;<br/> 2.  75˅8 = 61˅10;<br/>3.  111011˅2 = 59˅10.<br/>Таким образом, наименьшим среди этих трех чисел является число 57.<br/> 57.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10.3</h></strong></center>
                  <p >Переведите число 199 из десятичной системы счисления в двоичную систему счисления. В ответе укажите двоичное число. Основание системы счисления указывать не нужно.</p>
</div></center>
                `,
              text: " 11000111.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10.4</h></strong></center>
                  <p >Переведите двоичное число 1100110 в десятичную систему счисления.</p><br/>

</div></center>
                `,
              text: " 102.",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10.5</h></strong></center>
                  <p >Вычислите значение арифметического выражения:
<br/>
110101˅2 + 1011˅8 + 101˅16
<br/>
В ответе запишите десятичное число, основание системы счисления указывать не нужно.</p><br/>

</div></center>
                `,
              text: " 831.",
            },
          ],
        },
      ],
      currentTask: null,
      showAnswer: [], // Массив для отслеживания видимости ответов
    };
  },
  mounted() {
    // Инициализируем массив showAnswer, скрывая ответы по умолчанию
    this.showAnswer = Array(this.tasks.length).fill(false);
    // Инициализируем вложенные массивы для каждого задания
    this.showAnswer = this.showAnswer.map(() => Array(5).fill(false));
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

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://an.yandex.ru/system/context.js";
      script.async = true;
      document.head.appendChild(script);
    });
  },
  methods: {
    showTask(taskIndex) {
      this.currentTask = taskIndex;
    },
    toggleAnswer(taskIndex, subTaskIndex) {
      this.showAnswer[taskIndex][subTaskIndex] = !this.showAnswer[taskIndex][
        subTaskIndex
      ];
    },
  },
};
</script>

<style>
.hello {
  margin-top: 0px !important;
}
p {
  color: black;
  text-align: justify; /* Выравнивание по ширине */
}
h {
  color: black !important;
  text-align: justify; /* Выравнивание по ширине */
}
a {
  color: rgb(255, 255, 255) !important;
  text-align: justify; /* Выравнивание по ширине */
}

.circle-button {
  margin: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: blueviolet;
  border: 1px solid white;
}
.sticky-ad {
  margin: 5px;
}
.question-box {
  background-color: white;
  border-radius: 20px;
  width: 90%;
  max-width: 700px;
  padding: 10px;
}
.answer {
  background-color: white;
  padding: 10px;
  border: 1px solid white;
  border-radius: 20px;
  color: black;
}

.answer-text {
  color: black !important;
}
.toggle-button {
  margin: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  color: white;
  border-width: 1.5px;
}
.toggle-button.show {
  background-color: green;
  border-color: black;
}
.toggle-button.hide {
  background-color: #d41613;
}
.circle-button:hover {
  border: 0.5px solid white;
  background-color: #b752ff !important;
}
@media screen and (max-width: 768px) {
  .question-box {
    width: 100%;
  }
  .circle-button {
    width: 50px;
    height: 50px;
  }
  .toggle-button {
    width: 100%;
    padding: 15px;
  }
}
button:hover {
  /* Стиль при наведении курсора */
  border: 1px solid white !important;
}
</style>
