import Vue from 'vue'
import App from './demo.vue'

// var app = new Vue({
//   el: "#app",
//   data: {
//     message: "Hello Vue!"
//   }
// });
// var app2 = new Vue({
//   el: "#app-2",
//   data: {
//     message: "You loaded this page on " + new Date().toLocaleString()
//   }
// });
// var app3 = new Vue({
//   el: "#app-3",
//   data: {
//     seen: false
//   }
// });
// var app4 = new Vue({
//   el: "#app-4",
//   data: {
//     todos: [{ text: "vue 1" }, { text: "vue 2" }, { text: "vue 3" }]
//   }
// });

// var app5 = new Vue({
//   el: "#app-5",
//   data: {
//     message: "Hello Di!"
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message
//         .split("")
//         .reverse()
//         .join("");
//     }
//   }
// });

// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Vue Di'
//   }
// })

// Vue.component('todo-item', {
//   props: ['todo1'],
//   template: '<li>{{todo1.text}}</li>'
// })

// var app7 = new Vue({
//   el: '#app-7',
//   data: {
//     List: [
//       { id: 0, text: 'Vegetables' },
//       { id: 1, text: 'Cheese' },
//       { id: 2, text: 'Whatever else humans are supposed to eat' }
//     ]
//   }
// })

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
