<template>
  <div class="hello">

    <!-- BINDING TEXT -->
    <div id="using-moustache-syntax">
      <h1>Hello Diego</h1>
      <h1>Hello {{ name }}</h1>
      <h1>{{ greet }} {{ name }}</h1>
    </div>
    <div id="using-v-text-directive">
      <h1 v-text="band"></h1>
      <div v-text="band"></div>

      <!-- IMPORTANTE -->
      <!-- 1. Cuando usemos la directiva de v-text siempre sobreescribiremos el texto el contenido que contenga de hijos el elemento donde v-text esté apuntando. -->
      <!-- 2. Si queremos trabajar dinámicamente con nuestra data por favor acatarse a usar el syntax de bigotes :) -->
      <h1 v-text="band">Fleetwood Mac is the best band ever!</h1>

      <!-- BINDING HTML -->

      <div v-html="bindingHtml"></div>

      <div v-html="bindingHTMLCrossSide"></div>

      <!-- BINDING ATTRIBUTES -->

      <!-- Si queremos bindear atributos dentro de nuestro código no podemos usar el sytanx de los bigotes! El equipo de VUE a cread tags específicos para poder bindear este tipo de atributos. -->

      <!-- Binding with an ID Attribute -->
      <h1 v-bind:id="balmas-heading">Heading - with Binding ID Attribute</h1>

      <!-- Binding with an ID Attribute -->
      <button v-bind:disable="isDisable">Binding with a Boolean Value</button>

      <!-- Binding with a Class Attribute -->
      <h1 v-bind:class="status">Underlined Text - Binding a Class Attribute</h1>

      <!-- Binding with a Class Attribute - With more than one class -->
      <h1 v-bind:class="status" class="underline">
      Underlined Text - Binding a Class Attribute</h1>


    <div id="binding-conditional-attributes">
      <!-- Conditionally binding a class attribute to an element depending if the dataProperty = true or false -->
      <!-- This checks for bot conditions-->

      <h1 v-bind:class="isPromoted && 'prmoted'"></h1>


      <!-- Operador ternario - Ternary Operator -->
      <!-- if it is true (?) run the first condition, otherwise (:) run the second condition-->
      <h1 v-bind:class="isSoldOut ? 'sold-out': 'available'">Sold out movies</h1>

            <!-- Binding an array of classes -->
      <h1 v-bind:class="['underline', 'available']">Binding an array of classes</h1>

      <!-- Conditionally attaching classes by combining expressions withing the array -->
      <h1 v-bind:class="[
        isPromoted && 'promoted',
        isSoldOut ? 'sold-out' : 'available',
        ]">Array of conditional classes</h1>

        <!-- Conditionally attaching classes by combining within an object -->
        <h1 v-bind:class="{
          promoted: isPromoted,
          new: !isSOldOut, 
          'sold-out': isSoldOut,
        }">Object of Conditional Classes</h1>
    </div>
    <div id="binding-styles">
      <h1 v-bind:style="{
        padding: '20px',
        color: textColor,
        fontSize: textSize + 'px'
      }">Inline styling done through object approach</h1>
        
      <!-- Dynamically bind an object fetched from the data property -->
      <h1 v-bind:stlye="styleObject">Style Object fetched from data</h1>

      <!-- Dynamically bind arrays that are coming from the data object as an actual object passed as an array of objects inside the HTML -->
      <h1 v-bind:stlye="[basesStyleObject, successStyleObject]">Injecting an array of objects inside the style tag via binding</h1>

      <!-- Practice Exercise -->
      <div v-bind:class="colorOfBackground">
        <h1 v-bind:style="{
          fontSize: '60px',
          color: 'lightgreen',
        }">{{ greeting }} {{ givenName }} {{ familyName }}</h1>

        <h1 v-if="ageForDrinking < '21'">No puede tomar</h1>
        <h1 v-else-if="ageForDrinking > '21' && ageForDrinking < '65'">Puede tomar</h1>
        <h1 v-else-if="ageForDrinking > '65'">Estás viejo para tomar</h1>
        <h1 v-else>Eso no es una edad válida</h1>

      </div>


    </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld', // nombre del componente, no tiene nada que ver con el metodo de data de abajo.

  data() {
    return {
      // binding text
      // usamos la regla del syntax de bigotes para poder acceder a nuestra data dentro del template, que es nuestro HTML
      // Este principio se llama text interpolation
      name: "Rodrigo",
      greet: "Hello",

      //V-Text directive
      band: "Fleetwood Mac",

      //binding html using v-html directive, please always use templateLiterals for injecting html into the template templateLiteras = ``
      bindingHtml: `<b>Wu Tang Clan</b>`,

      // Usando APIs externos siempre tener cuidad que la data que componga esta API sea correcta, porque si usamos un API externo y usamos esta directiz abrimos las posibilidades de que nos ataquen mediante un approach de hackeo que se llama crossSideScripting!
      bindingHTMLCrossSide: `<a href="#" onCLick="alert('You have been hacked by the WuTang Clan')">Win a prize by clicking here!</a>`,

      // Bind Attributes - ID Attribute
      headingIdExample: "balmas-heading",

      //Binding with a Boolean Value
      isDisabled: false,

      // Bind Attributes - Class Attribute
      status: "danger", 

      // Conditionally render attributes/properties with classes
      isPromoted: true,

      // Conditionally render attributes with more than 1 condition
      isSoldOut: true,

      // Dynamically inject style properties within an object
      textColor: "#3590F3",
      textSize: 40,

      // Dynamically inject style properties within a single Object
      styleObject: {
        color: 'blue',
        fontSize: '50px',
        padding: '20px'
      },

      // Dynamically inject arrays within a style attribute
      baseStyleObject: {
        fontSize: "50px",
        padding: "10px",
      },

      successStyleObject: {
        color: "green",
        backgroundColor: "lightgreen",
        border: "1px solid green",
        padding: "20px",
      },

      colorOfBackground: "colorful-background",

      greeting: 'Aloha,',

      givenName: 'Diego',

      familyName: 'Zito',

      ageForDrinking: '66',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.danger {
  text-decoration: underline;
}

.underline {
  text-decoration: underline;
}

.promoted {
  font-style: italic;
  color: blue;
}

.sold-out {
  color: red;
}

.available {
  color: green;
}

.colorful-background{
  background-color: lightgray
}
</style>
