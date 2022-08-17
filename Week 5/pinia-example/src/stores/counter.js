import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'count',
  // State es lo que usamos para definir las propiedades de datos que queremos usar
  state: () => ({
    count: 100,
  }),

  // El objeto que usaremos para ejecutar funciones mas de una vez
  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount(){
      this.count--;
    },
  },

  // Getter en esencia nos trae data del estado de nuestra logica, podemos pensar que un getter hace lo mismo que una propiedad computada. Ahora, en las props computadas, cuando queremos modificar lo que recibimos, tenemos que expandir vale. Aca no, aca es la esencia de la propiedad computada que basicamente es algo que nos trae información
  getters: {
    oddOrEven: (state) => {
      if(state.count %2 === 0) return "Even";
      else return "Odd";
    }
  },
})
