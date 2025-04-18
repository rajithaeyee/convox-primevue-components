<template>
    <Fieldset legend="Inputs">
        <div class="p-10">
            <FloatLabel>
                <InputText id="username" v-model="textVal" />
                <label for="username">Username</label>
            </FloatLabel>
        </div>
    </Fieldset>

</template>

<script>
export default {
    data() {
        return {
            textVal: null,
        }
    },
}
</script>