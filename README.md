# Vue3_CRUD
- Use vue3 implement a simple CRUD ver.
- Official document <a href="https://vuejs.org/guide/introduction.html">Vue.js</a>
- Essential know-how in this demo

## 1.Using Vue from CDN
in this case:Using the ES Module Build</br>

```
<div id="app">{{ message }}</div>
<script type="module">
  import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    }
  }).mount('#app')
</script>
```

## 2.Creating a Vue Application
HTML:
```
<div id="app">
  <button @click="count++">{{ count }}</button>
</div>
```
JavaScript:
```
import { createApp } from 'vue'

const app = createApp({
  data() {
    return {
      count: 0
    }
  }
})

app.mount('#app')
```
## 3.Template Syntax
### Text Interpolation
```
<span>Message: {{ msg }}</span>
```
## 4.Reactivity Fundamentals
It is important to note that the returned value from reactive() is a Proxy of the original object, which is not equal to the original object:
```
const raw = {}
const proxy = reactive(raw)

// proxy is NOT equal to the original.
console.log(proxy === raw) // false
```
To use reactive state in a component's template, declare and return them from a component's setup() function:
```
import { reactive } from 'vue'

export default {
  // `setup` is a special hook dedicated for composition API.
  setup() {
    const state = reactive({ count: 0 })

    // expose the state to the template
    return {
      state
    }
  }
}
```
```
<div>{{ state.count }}</div>
```
## 5.Computed Properties
A computed property will only re-evaluate when some of its reactive dependencies have changed. This means as long as author.books has not changed, multiple access to publishedBooksMessage will immediately return the previously computed result without having to run the getter function again.
```
<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

// a computed ref
const publishedBooksMessage = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
</template>

```
## 6.Conditional Rendering
### v-if vs. v-show
Generally speaking, v-if has higher toggle costs while v-show has higher initial render costs. So prefer v-show if you need to toggle something very often, and prefer v-if if the condition is unlikely to change at runtime.

## 7.List Rendering
### v-for with an object
```
const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
```
```
<ul>
  <li v-for="value in myObject">
    {{ value.title }}{{ value.author }}{{ value.publishedAt }}
  </li>
</ul>
```
## 8.Event Handling
### Listening to Events
The usage would be v-on:click="handler" or with the shortcut, @click="handler".
```
function say(message) {
  alert(message)
}
```
```
<button @click="say('hello')">Say hello</button>
<button @click="say('bye')">Say bye</button>
```
## 9.Form Input Bindings
```
<p>Message is: {{ message }}</p>
<input v-model="message" placeholder="edit me" />
```
## 10.Components Basics
### Defining a Component
```
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    return { count }
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`
  // or `template: '#my-template-element'`
}
```
### Using a Component
```
<script setup>
import ButtonCounter from './ButtonCounter.vue'
</script>

<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
</template>
```
### Passing Props
in child component be like:
```
export default {
  props: ['title'],
  setup(props) {
    console.log(props.title)
  }
}
```
calling child component at parent:
```
<BlogPost title="My journey with Vue" />
<BlogPost title="Blogging with Vue" />
<BlogPost title="Why Vue is so fun" />
```
Demo:<a href="https://rexzzythereal.github.io/Vue3_CRUD/Vue3_CRUD/">click me !</a>
