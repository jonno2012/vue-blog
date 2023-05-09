import {defineStore} from "pinia";

export let userStore = defineStore('userStore', {
    state:() => ({
        users: []
    }),

    actions: {
        async fill() {
            let results = null
            await fetch('https://jsonplaceholder.typicode.com/users').then(response => results = response.json())
            await results.then(response => {
                this.$state.users = response
            })
        },
        getUserName(id) {
            let user = this.$state.users.find(user => {
                return parseInt(id) === parseInt(user.id)
            })

            return user ? user.name : '-'
        }
    }
})