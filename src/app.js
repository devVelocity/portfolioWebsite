
var rawData = null
var getParsedArray = null


const app =  Vue.createApp({
    data(){
        return{
            finishedArray: {",":","},
            filterCriteria: 
            ['All','HTML','CSS','JS','VueJS','JSON'],
            currentFilter: 'All',
            currentFilter2: false,
        }
    },
    methods:{
        changeFilter(el){
            this.currentFilter = el
        },
        changeFilter2(el){
            this.currentFilter2 = el
        }
    },
    mounted(){
        fetch('./JSON/projects.JSON')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            rawData = data

            getParsedArray = JSON.parse(JSON.stringify(rawData))
            this.finishedArray = getParsedArray
            // console.log(this.finishedArray)
    
        })
        .catch(error => console.log(error));

    }
})

app.mount("#app")