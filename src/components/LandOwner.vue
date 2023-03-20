<template>
    <div class="m-2">
        <h3> Advance Features </h3>
        <button class="btn btn-primary" @click="ContactFarming">
            Contact Farming 
        </button>
    </div>
</template>

<script>
export default {
    name: "LandOwner",
    data() {
        return {
            crop: [],
            listing: [],
            user: {},
        };
    },
    methods:{
        ContactFarming(){
            this.$router.push({name: 'ContactFarming'});
        }
    },
    }
    </script>