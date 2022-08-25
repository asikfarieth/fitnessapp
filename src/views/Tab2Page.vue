<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Weight Tracker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
        </ion-toolbar>
      </ion-header>

        <main>
        <h1> Weight Tracker </h1>

        <div class="current">
          <span>{{ currentWeight.weight }}</span>
          <small> current Weight (kg) </small>
        </div>

        <form @submit.prevent="addWeight">

          <input 
            type="number" 
            step="0.1" 
            v-model="weightInput" />

          <input 
          type="submit" 
          value="Add weight" />
          
        </form>

        <Toggle v-model="value" :options="options" />

        <div> </div>
          
        <div v-if="weights && weights.length > 0">

          <h2> Last 7 days </h2>

          <div class="canvas-box">
            <canvas ref="weightChartElement"></canvas>
          </div>

          <div class="weight-history">
            <h2>Weight history</h2>
            <ul>
              <li v-for="weight in weights"
                v-bind:key = "weight.weight">
                <span>
                  {{ weight.weight }}kg
                </span>
                <small>
                  {{ new Date(weight.date).toLocaleDateString() }}
                </small>
              </li>
            </ul>
          </div>
        </div>

      </main>
    </ion-content>
  </ion-page>
</template>


<script setup>
//installing chartjs -> npm i chart.js
//to start enter ->  npm run dev 

//ref = refrerences or variables
//shallow ref = only looks at the top level of the object
//computed = computing ref to variables
//watch = check for changes
//nextTick = run once a tick later
import { ref, shallowRef, computed, watch, nextTick, defineComponent, VueElement } from 'vue';
import Chart from 'chart.js/auto';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

//weights in empty array
const weights = ref([])

//where we store our canvas
const weightChartElement = ref(null)

//show top level else updateing chart will throw some errors
const weightChart = shallowRef(null)

//weight input form
const weightInput = ref(60.0)

//current weight
//sort a and b, sort by date, get first object or return weight of 0 
const currentWeight = computed(() => {
  return weights.value.slice().sort((a, b) => b.date - a.date)[0] || { weight: 0 }
})

//adding weight with timestamp
const addWeight = () => {
  weights.value.push({
    weight: weightInput.value, 
    date:new Date().getTime()
  })
}

//record down old and new weights
watch(weights, newWeights => {
  const ws = [...newWeights]

  if(weightChart.value){
    weightChart.value.data.labels = ws
      .sort((a, b) => a.date - b.date)
      .map(w => new Date(w.date).toLocaleDateString())
      .slice(-7)  //7day

    weightChart.value.data.datasets[0].data = ws
      .sort((a, b) => a.date - b.date)
      .map(w => w.weight)
      .slice(-7)  //7day

    weightChart.value.update()

    return
  }

  //drawing of chart
  nextTick(() => {
    weightChart.value = new Chart(weightChartElement.value.getContext('2d'), {
      type: 'line',
      data: {
        labels: ws
          .sort((a, b) => a.date - b.date)
          .map(w => new Date(w.date).toLocaleDateString()),
        datasets: [
          {
            label: 'Weight',
            data: ws
              .sort((a, b) => a.date - b.date)
              .map(w => w.weight),
            backgroundColor: 'rgba(10, 186, 181, 0.2)',
            borderColor: 'rgb(10, 186, 181)',
            borderWidth: 1,
            fill: true
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    })
  })
}, {deep: true })
</script>


<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'montserrat', sans-serif;
}

body {
	background-color: #eee;
}

main {
	padding: 1.5rem;
}

h1 { 
	font-size: 2em;
	text-align: center;
	margin-bottom: 2rem;
  color: black;
}

h2 {
	margin-bottom: 1rem;
	color: #888;
	font-weight: 400;
}

.current {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: 200px;
	height: 200px;
	
	text-align: center;
  color: black;
	background-color: white;
	border-radius: 999px;
	box-shadow: 0 4px 12px rgba(10,186,181);
	border: 5px solid rgba(0 0%);
	
	margin: 0 auto 2rem;
}

.current span {
	display: block;
	font-size: 2em;
	font-weight: bold;
	margin-bottom: 0.5rem;
}

.current small {
	color: #888;
	font-style: italic;
}

form {
	display: flex;
	margin-bottom: 2rem;
	border: 1px solid #AAA;
	border-radius: 0.5rem;
	overflow: hidden;
	transition: 200ms linear;
}

form:focus-within,
form:hover {
	border-color: #0abab5;
	border-width: 2px;
}

form input[type="number"] {
	appearance: none;
	outline: none;
	border: none;
  color: black;
	background-color: white;
	flex: 1 1 0%;
	padding: 1rem 1.5rem;
	font-size: 1.25rem;
  width: 10px;
}

form input[type="submit"] {
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	background-color: #0abab5;
	padding: 0.5rem 1rem;
	color: white;
	font-size: 1.25rem;
	font-weight: 700;
	transition: 200ms linear;
	border-left: 3px solid transparent;
}

form input[type="submit"]:hover {
	background-color: white;
	color: #0abab5;
	border-left-color: #0abab5;
}

.weight-history ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

.weight-history ul li {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem;
	cursor: pointer;
}

.weight-history ul li:nth-child(even) {
	background-color: #dfdfdf;
}

.weight-history ul li:hover {
	background-color: #f8f8f8;
}

.weight-history ul li:last-of-type {
	border-bottom: none;
}

.weight-history ul li span {
	display: block;
	font-size: 1.25rem;
	font-weight: 700;
	margin-right: 1rem;
  color: black;
}

.weight-history ul li small {
	color: #888;
	font-style: italic;
}

.preference-switches{
    width: 41px;
    height: 20px;
    background-color: #0abab5;
      border-radius: 25px;
      padding: 1px;
    margin-left: 1px;
    margin-bottom: 0.3rem;
    }

    .ball{
    width: 18px;
    height: 18px;
    background-color: white;
    border-radius: 25px;
    box-shadow: 0 2px 7px black;
  }
</style>
