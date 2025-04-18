<template>
    <Fieldset legend="Toasts">
        <div class="p-10">
            <Toast />
            <Button label="Show" @click="show" />
        </div>
    </Fieldset>

</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods:{
        show(){
            this.$toast.add({severity: 'success', closable: true, detail: "I am a convox toast!", life: 1500})
        },
    },
}
</script>