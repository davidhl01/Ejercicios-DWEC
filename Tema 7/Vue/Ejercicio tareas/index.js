$(document).ready(function () {
    const tareas = {
        data() {
            return {
                sincompletar: 0,
                tareas: [{ nombre: "", completado: false }],
                nuevaTarea: ""
            }
        },
        methods: {
            agregar() {
                this.tareas.push(this.nuevaTarea)
                this.nuevaTarea = ""
                this.contador++
            },
        },
        computed: {
            completar() {
                return this.tareas.completado = true;
            }
        }

    }

    Vue.createApp(tareas).mount('#misnotas')
})