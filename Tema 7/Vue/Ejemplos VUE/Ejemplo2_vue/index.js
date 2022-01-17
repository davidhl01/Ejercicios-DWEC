window.onload = () => { // Se puede hacer con JQuery

    const Counter = {
        data() {
            return {
                contrasena:""
            }
        },
        methods: {
        
        }
    }

    Vue.createApp(Counter).mount('#aplicacionVue')
}