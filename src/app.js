
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
            mobileNavOpen: false,
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
        fetch('/src/JSON/projects.JSON')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            rawData = data

            getParsedArray = JSON.parse(JSON.stringify(rawData))
            this.finishedArray = getParsedArray
            // console.log(this.finishedArray)
    
        })
        .catch(error => console.log(error));



        const tween = KUTE.fromTo(
            '#lb1',
            { path: '#lb1' },
            { path: '#lb2' },
            { repeat: 999, duration: 1000, yoyo: true }
        )
        
        tween.start()

        const tween2 = KUTE.fromTo(
            '#cb1',
            { path: '#cb1' },
            { path: '#cb2' },
            { repeat: 999, duration: 20000, yoyo: true }
        )


        tween2.start()


        

    }
})

app.mount("#app")



