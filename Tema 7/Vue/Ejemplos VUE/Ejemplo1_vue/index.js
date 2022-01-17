window.onload = () => { // Se puede hacer con JQuery

    const Counter = {
        data() {
            return {
                counter: 0,
                listanombres: ["jose" ,"pepe","juan"],
                nuevonombre:""
            }
        },
        methods: {
            incrementa() {
                this.listanombres.push(this.nuevonombre) // Introduce en la lista lo que hay en el input nuevonombre
                this.nuevonombre = ""
            }
        }
    }

    Vue.createApp(Counter).mount('#aplicacionVue')
}
