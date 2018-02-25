<template>
    <div>
        <i class="material-icons" style="color: red">favorite</i> {{ hello }}
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class Home extends Vue {
        public hello: string = "hello, world!";
    }
</script>
