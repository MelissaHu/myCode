<template>
     <section class="financial-list">
         <section class="collect" @click="jumpPage">
            <h2>{{newsDate.title}}</h2>
            <span class="fl">{{newsDate.author_name}}</span>    
            <span>{{newsDate.date | getYMD}}</span>   
         </section>
     </section>
</template>

<script>
    export default{
        name:'NewsCell',
        props:{
          newsDate:Object
        },
        data(){
            return{

            }
        },
        computed:{

        },
        methods:{
            jumpPage:function(){
             window.location.href = this.newsDate.url
            }
        }
    }
</script>
