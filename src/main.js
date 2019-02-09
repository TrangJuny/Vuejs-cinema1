import './style.scss';
import Vue from 'vue';

<<<<<<< HEAD
// router
import routers from './util/routers';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import moment from 'moment-timezone';
import {checkFilter} from './util/bus';
=======
import VueResource from 'vue-resource'
import moment from 'moment-timezone'
//component
import MovieList from './components/MovieList.vue';
import MovieFilter from './components/MovieFilter.vue';
>>>>>>> a0a8add60118464ff61c8b1bd43d2b4270d38126

Vue.use(VueResource);
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype,'$moment',{get(){
<<<<<<< HEAD
    return this.$root.moment;
}});

//Global event bus
const bus = new Vue();
Object.defineProperty(Vue.prototype,'$bus',{get(){return this.$root.bus}});

Vue.use(VueRouter);

//component
import OverView from './components/OverView.vue';
// const router=new VueRouter({ routers })
const routes = [
    { path: '/', component: OverView },
];
const router = new VueRouter({
    routes // short for `routes: routes`
})

=======

    console.log('test');
    console.log(this);
    console.log(this.$root);
    return this.$root.moment;thuytrang.mis93@gmail.com
}});
>>>>>>> a0a8add60118464ff61c8b1bd43d2b4270d38126
new Vue({
    el:'#app',
    data:{
        genre:[],
        time:[],
        movies:[],
        moment,
        day:moment(),
<<<<<<< HEAD
        bus
    },
    router,
    // methods: {
    //     // checkFilter (category,title,checked) {
    //     //     if(checked){
    //     //         this[category].push(title)
    //     //     }else{
    //     //         let index =this[category].indexOf(title);
    //     //         if(index>-1) this[category].splice(index,1);
    //     //     }
    //     // }
    // },
    
=======
    },
    methods: {
        checkFilter (category,title,checked) {
            if(checked){
                this[category].push(title)
            }else{
                let index =this[category].indexOf(title);
                if(index>-1) this[category].splice(index,1);
            }
        }
    },
    components:{
        MovieList,
        MovieFilter,
    },
>>>>>>> a0a8add60118464ff61c8b1bd43d2b4270d38126
    created(){
        this.$http.get('/api').then(res=>{
            this.movies = res.data;
        });
<<<<<<< HEAD
        this.$bus.$on('check-filter',checkFilter.bind(this))
    }
=======
    }
    
>>>>>>> a0a8add60118464ff61c8b1bd43d2b4270d38126
});