<template>
    <Fieldset legend="Tables">
        <div class="p-10">
            <DataTable :value="apps" resizableColumns columnResizeMode="fit" showGridlines tableStyle="min-width: 50rem">
    <Column field="name" sortable header="Name"></Column>
    <Column field="cpu" sortable header="CPU"></Column>
    <Column field="mem" sortable header="Memory"></Column>
</DataTable>
        </div>
    </Fieldset>

</template>

<script>
export default {
    data() {
        return {
            apps: [
        {
          name: "App 1",
          cpu: "123",
          mem: "512M"
        },
        {
          name: "App 2",
          cpu: "123",
          mem: "512M"
        },
        {
          name: "App 3",
          cpu: "123",
          mem: "512M"
        },
        {
          name: "App 4",
          cpu: "123",
          mem: "512M"
        },
        {
          name: "App 5",
          cpu: "123",
          mem: "512M"
        },
      ],
        }
    },
}
</script>