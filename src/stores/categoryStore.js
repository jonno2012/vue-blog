import {defineStore} from "pinia";
import data from './categoryStyleMapping.json'
export let categoryStore = defineStore('categoryStore', {
    state:() => ({
        categories: []
    }),

    actions: {
        async fill() {
            let results = null
            await fetch('https://api.escuelajs.co/api/v1/categories').then(response => results = response.json())
            await results.then(response => {
                this.$state.categories = response
            })
            if (this.$state.categories.length) {
                this.setCategoryColorMappings()
            }
        },
        setCategoryColorMappings() {
            this.$state.categories.map((category) => {
                let styleClass = data.categories.find(item => {
                    return item.catId === category.id
                })
                if (styleClass) {
                    category.colorClass = styleClass.color
                } else {
                    category.colorClass = data.default
                }
            })
        },
        getCategoryName(id) {
            let category = this.$state.categories.find(category => {
                return parseInt(id) === parseInt(category.id)
            })

            return category ? category.name : '-'
        },
        getThemeClass(id) {
            let category = this.$state.categories.find(category => {
                return parseInt(id) === parseInt(category.id)
            })

            return category ? category.colorClass : null
        }

    },

    getters: {
        mostPopularCategory(posts) {

        }
    }
})