<template>
    <Fieldset legend="Radios and Checkboxes">
        <div class="p-10">
            <div class="flex items-center gap-2 my-2.5">
                <RadioButton v-model="ingredient" inputId="ingredient1" name="pizza" value="Cheese" />
                <label for="ingredient1">Cheese</label>
            </div>
            <div class="flex items-center gap-2 my-2.5">
                <RadioButton v-model="ingredient" inputId="ingredient2" name="pizza" value="Mushroom" />
                <label for="ingredient2">Mushroom</label>
            </div>
            <div>
                <Checkbox v-model="checked" binary class="my-2.5" />
            </div>
            <div>
                <ToggleSwitch v-model="switchVal" class="my-2.5" />
            </div>
        </div>
    </Fieldset>

</template>

<script>
export default {
    data() {
        return {
            ingredient: "Cheese",
            checked: true,
            switchVal: true,
        }
    },
}
</script>