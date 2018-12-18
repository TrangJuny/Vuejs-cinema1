import './style.scss';
import Vue from 'vue';
import genres from './util/genres';

new Vue({
    el:'#app',

    methods: {
        checkFilter () {
            alert('hello parent')
        }
    },
    components:{
        'movie-list':{
            template:`<div id="movie-list">
                        <div v-for=" item in movies" class="movie">{{item.title}}</div>
                    </div>`,
                    data(){
                        return {
                            movies:[
                                {title:'Pulp fiction'},
                                {title:'Home fiction'},
                                {title:'Austin fiction'},
                                {title:'Pulp fiction'},
                            ]
                        }
                    }
        },
        'movie-filter':{
            data(){
                return {
                    genres
                };
            },
            methods: {
                checkFilter () {
                    alert('hello')
                }
            },
            template:`<div id="movie-filter">
                        <h2>Filter results</h2>
                        <div class="filter-group">
                            <div v-for="genre in genres">
                                {{genre}} 
                            </div>
                            <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkFilter"></check-filter>
                        </div>
                    </div>`,
                    components: {
                        'check-filter':{
                            data(){
                                return{
                                    checked:false
                                }
                            },
                            props:['title'],
                            methods: {
                                checkFilter () {
                                    this.checked=!this.checked
                                    this.$emit('check-filter')
                                }
                            },
                            template:`
                                <div v-bind:class="{'check-filter':true , active : checked }" v-on:click="checkFilter"> 
                                    <span class="checkbox"></span>
                                    <span class="check-filter-title">
                                        {{title}} 
                                    </span>
                                </div>                               
                            `
                        },
                    }

        }
    }
    
});
console.log('hello')