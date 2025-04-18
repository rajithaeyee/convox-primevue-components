<template>
    <Fieldset legend="Modals">
        <div class="p-10">
            <Button label="Show" @click="visible = true" />
            <Dialog v-model:visible="visible" modal header="Edit Organization" :style="{ minWidth: '25rem' }">
                <div class="flex items-center gap-4 mb-4">
                    <label for="username" class="font-semibold w-24">Organization</label>
                    <InputText id="username" class="flex-auto" autocomplete="off" />
                </div>
                <Divider />
                <div class="flex justify-end gap-2">
                    <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
                    <Button type="button" label="Save" @click="visible = false"></Button>
                </div>
            </Dialog>
        </div>
    </Fieldset>

</template>

<script>
export default {
    data() {
        return {
            visible: false,

        }
    },
}
</script>