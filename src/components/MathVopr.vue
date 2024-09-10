<template>
  <a href="#/Informatica/">
    <img
      src="../images/OUT.png"
      class="sticky"
      style="height: 30px; width: 30px; float: left; margin: 10px"
    />
  </a>
  <div>
    <center><h1 class="title">Варианты по математике:</h1></center>
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

      <div id="yandex_rtb_R-A-11699635-7" class="sticky-ad; hello"></div>
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
            <br />
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
<script setup>
import { onMounted } from "vue";

function handleKeydown(event) {
  if (event.key === "Escape") {
    window.location.href = "#/Chemistry";
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});
</script>
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
              <center><strong><h >Вопрос 1 (номера из учебников для подготовки)</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/144.bmp"></img></div></center>
                `,
              text: "3412",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/145.bmp"></img></div></center>
                `,
              text: "64",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 3</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/146.bmp"></img></div></center>
                `,
              text: "420",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/147.bmp"></img></div></center>
                `,
              text: "310,8; 312,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/148.bmp"></img>
</div></center>
                `,
              text: "14",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/149.bmp"></img>
</div></center>
                `,
              text: "2,25",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/150.bmp"></img>
</div></center>
                `,
              text: "1",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/151.bmp"></img></div></center>
                `,
              text: "81",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/152.bmp"></img>
</div></center>
                `,
              text: "-0,8",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/153.bmp"></img></div></center>
                `,
              text: "0,15",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 11</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/154.bmp"></img><br/>


                `,
              text: "321",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 12</h></strong></center>
                  <image src="./public/tasks/155.bmp"></image>
</div></center>
                `,
              text: "5",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 13</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/156.bmp"></img>

</div></center>
                `,
              text: "2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 14</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/157.bmp"></img>
</div></center>
                `,
              text: "2,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 15</h></strong></center>
                  <image src="./public/tasks/158.bmp"></image></div></center>
                `,
              text: "21",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 16</h></strong></center>
                  <image src="./public/tasks/159.bmp"></image></div></center>
                `,
              text: "10",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 17</h></strong></center>
              <image src="./public/tasks/160.bmp"></image></div></center>
              </div></center>
                `,
              text: "133",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 18</h></strong></center>
              <image src="./public/tasks/1.bmp"></image></div></center>
               </div></center>
                `,
              text: "20",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 19</h></strong></center>
              <image src="./public/tasks/162.bmp"></image></div></center>
                </div></center>
                `,
              text: "2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 20</h></strong></center>
                  <image src="./public/tasks/163.bmp"></image></div></center>
                `,
              text: "-4; -3; 3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 21</h></strong></center>
                  <image src="./public/tasks/164.bmp"></image></div></center>
                `,
              text: "84 км/ч",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 22</h></strong></center>
                 <image src="./public/tasks/165.bmp"></image></div></center>
                `,
              text: "-4",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 23</h></strong></center>
                  <image src="./public/tasks/166.bmp"></image></div></center>
                `,
              text: "14",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 25</h></strong></center>
                  <image src="./public/tasks/167.bmp"></image></div></center>
                `,
              text: "6√13; 12√13; 18√5",
            },
          ],
        },
        //2
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1 (номера из учебников для подготовки)</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/168.bmp"></img></div></center>
                `,
              text: "142",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/169.bmp"></img></div></center>
                `,
              text: "42",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 3</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/170.bmp"></img></div></center>
                `,
              text: "26",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/1.bmp"></img></div></center>
                `,
              text: "162",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/172.bmp"></img>
</div></center>
                `,
              text: "1543",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/173.bmp"></img>
</div></center>
                `,
              text: "4",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/174.bmp"></img>
</div></center>
                `,
              text: "4",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/175.bmp"></img></div></center>
                `,
              text: "0,25",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/176.bmp"></img>
</div></center>
                `,
              text: "-1,9",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/177.bmp"></img></div></center>
                `,
              text: "0,14",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 11</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/178.bmp"></img><br/>


                `,
              text: "132",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 12</h></strong></center>
                  <image src="./public/tasks/179.bmp"></image>
</div></center>
                `,
              text: "0,0162",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 13</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/180.bmp"></img>

</div></center>
                `,
              text: "4",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 15</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/1.bmp"></img>
</div></center>
                `,
              text: "45",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 15</h></strong></center>
                  <image src="./public/tasks/182.bmp"></image></div></center>
                `,
              text: "30",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 16</h></strong></center>
                  <image src="./public/tasks/183.bmp"></image></div></center>
                `,
              text: "60",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 17</h></strong></center>
              <image src="./public/tasks/184.bmp"></image></div></center>
              </div></center>
                `,
              text: "64",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 18</h></strong></center>
              <image src="./public/tasks/185.bmp"></image></div></center>
               </div></center>
                `,
              text: "5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 19</h></strong></center>
              <image src="./public/tasks/186.bmp"></image></div></center>
                </div></center>
                `,
              text: "13 или 31",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 20</h></strong></center>
                  <image src="./public/tasks/187.bmp"></image></div></center>
                `,
              text: "(1;-6); (2,2;0)",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 21</h></strong></center>
                  <image src="./public/tasks/188.bmp"></image></div></center>
                `,
              text: "20 км/ч",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 22</h></strong></center>
                 <image src="./public/tasks/189.bmp"></image></div></center>
                `,
              text: "-5<=m<=4; m=1",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 23</h></strong></center>
                  <image src="./public/tasks/190.bmp"></image></div></center>
                `,
              text: "80",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 25</h></strong></center>
                  <image src="./public/tasks/191.bmp"></image></div></center>
                `,
              text: "9,6",
            },
          ],
        },
        //3
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1 (номера из учебников для подготовки)</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/192.bmp"></img></div></center>
                `,
              text: "213",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/193.bmp"></img></div></center>
                `,
              text: "7",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 3</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/194.bmp"></img></div></center>
                `,
              text: "23 200",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/195.bmp"></img></div></center>
                `,
              text: "20 000",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/196.bmp"></img>
</div></center>
                `,
              text: "65",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/197.bmp"></img>
</div></center>
                `,
              text: "-2,7",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/198.bmp"></img>
</div></center>
                `,
              text: "3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/199.bmp"></img></div></center>
                `,
              text: "216",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/200.bmp"></img>
</div></center>
                `,
              text: "-2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/201.bmp"></img></div></center>
                `,
              text: "0,15",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 11</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/202.bmp"></img><br/>


                `,
              text: "132",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 12</h></strong></center>
                  <image src="./public/tasks/203.bmp"></image>
</div></center>
                `,
              text: "60",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 13</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/204.bmp"></img>

</div></center>
                `,
              text: "2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 14</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/205.bmp"></img>
</div></center>
                `,
              text: "52",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 15</h></strong></center>
                  <image src="./public/tasks/206.bmp"></image></div></center>
                `,
              text: "12",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 16</h></strong></center>
                  <image src="./public/tasks/207.bmp"></image></div></center>
                `,
              text: "76",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 17</h></strong></center>
              <image src="./public/tasks/208.bmp"></image></div></center>
              </div></center>
                `,
              text: "96",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 18</h></strong></center>
              <image src="./public/tasks/209.bmp"></image></div></center>
               </div></center>
                `,
              text: "27",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 19</h></strong></center>
              <image src="./public/tasks/210.bmp"></image></div></center>
                </div></center>
                `,
              text: "2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 20</h></strong></center>
                  <image src="./public/tasks/211.bmp"></image></div></center>
                `,
              text: "(6; 6+√10)",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 21</h></strong></center>
                  <image src="./public/tasks/212.bmp"></image></div></center>
                `,
              text: "20 ",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 22</h></strong></center>
                 <image src="./public/tasks/213.bmp"></image></div></center>
                `,
              text: "-2; 2; 2,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 23</h></strong></center>
                  <image src="./public/tasks/214.bmp"></image></div></center>
                `,
              text: "30",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 25</h></strong></center>
                  <image src="./public/tasks/215.bmp"></image></div></center>
                `,
              text: "272",
            },
          ],
        },
        //4
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1 (номера из учебников для подготовки)</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/216.bmp"></img></div></center>
                `,
              text: "2314",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/217.bmp"></img></div></center>
                `,
              text: "158",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 3</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/218.bmp"></img></div></center>
                `,
              text: "134,7",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/219.bmp"></img></div></center>
                `,
              text: "15,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/220.bmp"></img>
</div></center>
                `,
              text: "5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/221.bmp"></img>
</div></center>
                `,
              text: "7,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/222.bmp"></img>
</div></center>
                `,
              text: "1",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/223.bmp"></img></div></center>
                `,
              text: "2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/224.bmp"></img>
</div></center>
                `,
              text: "-0,25",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/225.bmp"></img></div></center>
                `,
              text: "0,89",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 11</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/226.bmp"></img><br/>


                `,
              text: "213",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 12</h></strong></center>
                  <image src="./public/tasks/227.bmp"></image>
</div></center>
                `,
              text: "30",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 13</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/228.bmp"></img>

</div></center>
                `,
              text: "1",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 14</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/229.bmp"></img>
</div></center>
                `,
              text: "65 030",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 15</h></strong></center>
                  <image src="./public/tasks/230.bmp"></image></div></center>
                `,
              text: "14",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 16</h></strong></center>
                  <image src="./public/tasks/231.bmp"></image></div></center>
                `,
              text: "93",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 17</h></strong></center>
              <image src="./public/tasks/232.bmp"></image></div></center>
              </div></center>
                `,
              text: "48",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">

                <center><strong><h >Вопрос 18</h></strong></center>
              <image src="./public/tasks/233.bmp"></image></div></center>
               </div></center>
                `,
              text: "0,25",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 19</h></strong></center>
              <image src="./public/tasks/234.bmp"></image></div></center>
                </div></center>
                `,
              text: "23 или 32",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 20</h></strong></center>
                  <image src="./public/tasks/235.bmp"></image></div></center>
                `,
              text: "-5; 2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 21</h></strong></center>
                  <image src="./public/tasks/236.bmp"></image></div></center>
                `,
              text: "1,2 ч",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 22</h></strong></center>
                 <image src="./public/tasks/237.bmp"></image></div></center>
                `,
              text: "0 < m < 1; m >= 4",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 23</h></strong></center>
              
                  <image src="./public/tasks/238.bmp"></image></div></center>
                `,
              text: "18",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 25</h></strong></center>
                  <image src="./public/tasks/239.bmp"></image></div></center>
                `,
              text: "26",
            },
          ],
        },
        //5 (10 в)
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1 (номера из учебников для подготовки)</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/240.bmp"></img></div></center>
                `,
              text: "1342",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/241.bmp"></img></div></center>
                `,
              text: "44",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 3</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/242.bmp"></img></div></center>
                `,
              text: "75",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/243.bmp"></img></div></center>
                `,
              text: "90",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/244.bmp"></img>
</div></center>
                `,
              text: "6,8",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/245.bmp"></img>
</div></center>
                `,
              text: "264",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/246.bmp"></img>
</div></center>
                `,
              text: "4",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/247.bmp"></img></div></center>
                `,
              text: "105",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/248.bmp"></img>
</div></center>
                `,
              text: "-0,4",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/249.bmp"></img></div></center>
                `,
              text: "0,25",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 11</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/250.bmp"></img><br/>


                `,
              text: "231",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 12</h></strong></center>
                  <image src="./public/tasks/251.bmp"></image>
</div></center>
                `,
              text: "8",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 13</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/252.bmp"></img>

</div></center>
                `,
              text: "3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 14</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/253.bmp"></img>
</div></center>
                `,
              text: "6",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 15</h></strong></center>
                  <image src="./public/tasks/254.bmp"></image></div></center>
                `,
              text: "30",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 16</h></strong></center>
                  <image src="./public/tasks/255.bmp"></image></div></center>
                `,
              text: "33,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 17</h></strong></center>
              <image src="./public/tasks/256.bmp"></image></div></center>
              </div></center>
                `,
              text: "53",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 18</h></strong></center>
              <image src="./public/tasks/257.bmp"></image></div></center>
               </div></center>
                `,
              text: "4,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 19</h></strong></center>
              <image src="./public/tasks/258.bmp"></image></div></center>
                </div></center>
                `,
              text: "3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 20</h></strong></center>
                  <image src="./public/tasks/259.bmp"></image></div></center>
                `,
              text: "(4; 1); (4; -1)",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 21</h></strong></center>
                  <image src="./public/tasks/260.bmp"></image></div></center>
                `,
              text: "650 м",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 22</h></strong></center>
                 <image src="./public/tasks/261.bmp"></image></div></center>
                `,
              text: "m > 0,25; m = -2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 23</h></strong></center>
                  <image src="./public/tasks/262.bmp"></image></div></center>
                `,
              text: "24",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 25</h></strong></center>
                  <image src="./public/tasks/263.bmp"></image></div></center>
                `,
              text: "67,5",
            },
          ],
        },
        //6
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1 (номера из учебников для подготовки)</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/264.bmp"></img></div></center>
                `,
              text: "9 ",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/265.bmp"></img></div></center>
                `,
              text: "3,8",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 3</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/266.bmp"></img></div></center>
                `,
              text: "17",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/267.bmp"></img></div></center>
                `,
              text: "13,8",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/268.bmp"></img>
</div></center>
                `,
              text: "1; 162; 163; 164; 165; 166; 167; 168",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/269.bmp"></img>
</div></center>
                `,
              text: "-0,35",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/270.bmp"></img>
</div></center>
                `,
              text: "3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/271.bmp"></img></div></center>
                `,
              text: "560",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/272.bmp"></img>
</div></center>
                `,
              text: "0,75",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/273.bmp"></img></div></center>
                `,
              text: "0,45",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 11</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/274.bmp"></img><br/>


                `,
              text: "132",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 12</h></strong></center>
                  <image src="./public/tasks/275.bmp"></image>
</div></center>
                `,
              text: "20",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 13</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/276.bmp"></img>

</div></center>
                `,
              text: "1",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 14</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/277.bmp"></img>
</div></center>
                `,
              text: "54",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 15</h></strong></center>
                  <image src="./public/tasks/278.bmp"></image></div></center>
                `,
              text: "75",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 16</h></strong></center>
                  <image src="./public/tasks/279.bmp"></image></div></center>
                `,
              text: "54",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 17</h></strong></center>
              <image src="./public/tasks/280.bmp"></image></div></center>
              </div></center>
                `,
              text: "18",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 18</h></strong></center>
              <image src="./public/tasks/281.bmp"></image></div></center>
               </div></center>
                `,
              text: "4",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 19</h></strong></center>
              <image src="./public/tasks/282.bmp"></image></div></center>
                </div></center>
                `,
              text: "2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 20</h></strong></center>
                  <image src="./public/tasks/283.bmp"></image></div></center>
                `,
              text: "-2-√3; -2 + √3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 21</h></strong></center>
                  <image src="./public/tasks/284.bmp"></image></div></center>
                `,
              text: "28 км/ч",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 22</h></strong></center>
                 <image src="./public/tasks/285.bmp"></image></div></center>
                `,
              text: "m = 8",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 23</h></strong></center>
                  <image src="./public/tasks/286.bmp"></image></div></center>
                `,
              text: "7,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 25</h></strong></center>
                  <image src="./public/tasks/287.bmp"></image></div></center>
                `,
              text: "70",
            },
          ],
        },
        //7
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1 (номера из учебников для подготовки)</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/289.bmp"></img></div></center>
                `,
              text: "60,6",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/290.bmp"></img></div></center>
                `,
              text: "9910",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 3</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/291.bmp"></img></div></center>
                `,
              text: "67,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/292.bmp"></img></div></center>
                `,
              text: "11 445",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/293.bmp"></img>
</div></center>
                `,
              text: "15",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/294.bmp"></img>
</div></center>
                `,
              text: "0,46",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/295.bmp"></img>
</div></center>
                `,
              text: "4",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/296.bmp"></img></div></center>
                `,
              text: "0,2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/297.bmp"></img>
</div></center>
                `,
              text: "-0,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/298.bmp"></img></div></center>
                `,
              text: "0,2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 11</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/299.bmp"></img><br/>


                `,
              text: "132",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 12</h></strong></center>
                  <image src="./public/tasks/300.bmp"></image>
</div></center>
                `,
              text: "-15",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 13</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/301.bmp"></img>

</div></center>
                `,
              text: "4",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 14</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/302.bmp"></img>
</div></center>
                `,
              text: "46",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 15</h></strong></center>
                  <image src="./public/tasks/303.bmp"></image></div></center>
                `,
              text: "67",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 16</h></strong></center>
                  <image src="./public/tasks/304.bmp"></image></div></center>
                `,
              text: "36",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 17</h></strong></center>
              <image src="./public/tasks/305.bmp"></image></div></center>
              </div></center>
                `,
              text: "3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 18</h></strong></center>
              <image src="./public/tasks/306.bmp"></image></div></center>
               </div></center>
                `,
              text: "10,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 19</h></strong></center>
              <image src="./public/tasks/307.bmp"></image></div></center>
                </div></center>
                `,
              text: "1",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 20</h></strong></center>
                  <image src="./public/tasks/308.bmp"></image></div></center>
                `,
              text: "108",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 21</h></strong></center>
                  <image src="./public/tasks/309.bmp"></image></div></center>
                `,
              text: "84 кг",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 22</h></strong></center>
                 <image src="./public/tasks/310.bmp"></image></div></center>
                `,
              text: "m=-0,5; 2,5< m < 3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 23</h></strong></center>
                  <image src="./public/tasks/311.bmp"></image></div></center>
                `,
              text: "11√3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 25</h></strong></center>
                  <image src="./public/tasks/312.bmp"></image></div></center>
                `,
              text: "80",
            },
          ],
        },
        //8
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1 (номера из учебников для подготовки)</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/313.bmp"></img></div></center>
                `,
              text: "45216",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/314.bmp"></img></div></center>
                `,
              text: "240",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 3</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/315.bmp"></img></div></center>
                `,
              text: "25",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/316.bmp"></img></div></center>
                `,
              text: "26,3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/317.bmp"></img>
</div></center>
                `,
              text: "29 300",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/318.bmp"></img>
</div></center>
                `,
              text: "-0,75",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/319.bmp"></img>
</div></center>
                `,
              text: "2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/320.bmp"></img></div></center>
                `,
              text: "0,25",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/321.bmp"></img>
</div></center>
                `,
              text: "5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/322.bmp"></img></div></center>
                `,
              text: "0,84",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 11</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/323.bmp"></img><br/>


                `,
              text: "132",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 12</h></strong></center>
                  <image src="./public/tasks/324.bmp"></image>
</div></center>
                `,
              text: "144,5",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 13</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/325.bmp"></img>

</div></center>
                `,
              text: "3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 14</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/326.bmp"></img>
</div></center>
                `,
              text: "465",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 15</h></strong></center>
                  <image src="./public/tasks/327.bmp"></image></div></center>
                `,
              text: "27",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 16</h></strong></center>
                  <image src="./public/tasks/328.bmp"></image></div></center>
                `,
              text: "14",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 17</h></strong></center>
              <image src="./public/tasks/329.bmp"></image></div></center>
              </div></center>
                `,
              text: "99",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 18</h></strong></center>
              <image src="./public/tasks/330.bmp"></image></div></center>
               </div></center>
                `,
              text: "12,5",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 19</h></strong></center>
              <image src="./public/tasks/331.bmp"></image></div></center>
                </div></center>
                `,
              text: "13 или 31",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 20</h></strong></center>
                  <image src="./public/tasks/332.bmp"></image></div></center>
                `,
              text: "(2; 3); (-2; 3)",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 21</h></strong></center>
                  <image src="./public/tasks/333.bmp"></image></div></center>
                `,
              text: "15 км/ч",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 22</h></strong></center>
                 <image src="./public/tasks/334.bmp"></image></div></center>
                `,
              text: "[-6,25; -2,25]; [0; +бескон]",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 23</h></strong></center>
                  <image src="./public/tasks/335.bmp"></image></div></center>
                `,
              text: "12",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 25</h></strong></center>
                  <image src="./public/tasks/336.bmp"></image></div></center>
                `,
              text: "7 : 20",
            },
          ],
        },
        //9
        {
          subTasks: [
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 1 (номера из учебников для подготовки)</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/337.bmp"></img></div></center>
                `,
              text: "275",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 2</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/338.bmp"></img></div></center>
                `,
              text: "7,25",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 3</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/339.bmp"></img></div></center>
                `,
              text: "775,2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 4</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/340.bmp"></img></div></center>
                `,
              text: "17,8",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 5</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/341.bmp"></img>
</div></center>
                `,
              text: "2466",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 6</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/342.bmp"></img>
</div></center>
                `,
              text: "0,45",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 7</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/343.bmp"></img>
</div></center>
                `,
              text: "3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 8</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/344.bmp"></img></div></center>
                `,
              text: "294",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 9</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/345.bmp"></img>
</div></center>
                `,
              text: "-3",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 10</h></strong></center>
                 <img  alt="Справка" src="./public/tasks/346.bmp"></img></div></center>
                `,
              text: "0,55",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 11</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/347.bmp"></img><br/>


                `,
              text: "132",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 12</h></strong></center>
                  <image src="./public/tasks/348.bmp"></image>
</div></center>
                `,
              text: "49 300",
            },

            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
             <center><strong><h >Вопрос 13</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/349.bmp"></img>

</div></center>
                `,
              text: "2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 14</h></strong></center>
                  <img  alt="Справка" src="./public/tasks/350.bmp"></img>
</div></center>
                `,
              text: "36 290",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 15</h></strong></center>
                  <image src="./public/tasks/351.bmp"></image></div></center>
                `,
              text: "18",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 16</h></strong></center>
                  <image src="./public/tasks/352.bmp"></image></div></center>
                `,
              text: "143",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 17</h></strong></center>
              <image src="./public/tasks/353.bmp"></image></div></center>
              </div></center>
                `,
              text: "30",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
                <center><strong><h >Вопрос 18</h></strong></center>
              <image src="./public/tasks/354.bmp"></image></div></center>
               </div></center>
                `,
              text: "4",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 19</h></strong></center>
              <image src="./public/tasks/355.bmp"></image></div></center>
                </div></center>
                `,
              text: "1",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 20</h></strong></center>
                  <image src="./public/tasks/356.bmp"></image></div></center>
                `,
              text: "(-беск; -4); (6; +беск)",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 21</h></strong></center>
                  <image src="./public/tasks/357.bmp"></image></div></center>
                `,
              text: "14",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 22</h></strong></center>
                 <image src="./public/tasks/358.bmp"></image></div></center>
                `,
              text: "m=1,8; m=2",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 23</h></strong></center>
                  <image src="./public/tasks/359.bmp"></image></div></center>
                `,
              text: "60º; 120º; 60º; 120º",
            },
            {
              question: `
              <center>
              <div  style="background-color:white;margin: 8px;border-radius:20px;margin-bottom:20px">
              <center><strong><h >Вопрос 25</h></strong></center>
                  <image src="./public/tasks/360.bmp"></image></div></center>
                `,
              text: "2√14",
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
p {
  color: black;
}
h {
  color: black !important;
}
a {
  color: rgb(255, 255, 255) !important;
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
