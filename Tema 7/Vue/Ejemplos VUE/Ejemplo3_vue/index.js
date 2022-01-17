window.onload = () => { // Se puede hacer con JQuery

    const Counter = {
        data() {
            return {
                libro: "",
                author: {
                    name: 'John Doe',
                    books: [
                        'Vue 2 - Advanced Guide',
                        'Vue 3 - Basic Guide',
                        'Vue 4 - The Mystery'
                    ]
                }

            }
        },
        methods: {
            anadeLibro() {
                this.author.books.push(this.libro);
            }
        },
        computed: {
            publishedBooksMessage() {
                return this.author.books.length > 0 ? 'Yes' : 'No'
            }
        }
    }

    Vue.createApp(Counter).mount('#aplicacionVue')
}