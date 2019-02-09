import './style.scss';
import Vue from 'vue';

// router
import routers from './util/routers';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import moment from 'moment-timezone';
import {checkFilter} from './util/bus';

Vue.use(VueResource);
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype,'$moment',{get(){
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

new Vue({
    el:'#app',
    data:{
        genre:[],
        time:[],
        movies:[],
        moment,
        day:moment(),
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
    
    created(){
        this.$http.get('/api').then(res=>{
            this.movies = res.data;
        });
        this.$bus.$on('check-filter',checkFilter.bind(this))
    }
});