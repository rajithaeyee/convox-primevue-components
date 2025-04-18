import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { ConvoxPreset } from './config/prime-vue-preset';
import { Button, Dialog, RadioButton, Checkbox, DatePicker, FloatLabel, InputText, DataTable,Column,ToggleSwitch, Toast, Fieldset, Divider } from 'primevue';
import ToastService from 'primevue/toastservice';
import Chart from 'primevue/chart';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: ConvoxPreset,
        options: {
            prefix: 'convox',
            order: 'app-styles, primevue'
        },
        
    }
});
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('RadioButton', RadioButton);
app.component('Checkbox', Checkbox);
app.component('DatePicker', DatePicker);
app.component('FloatLabel', FloatLabel);
app.component('InputText', InputText);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ToggleSwitch', ToggleSwitch);
app.component('Fieldset', Fieldset);
app.component('Toast', Toast);
app.component('Divider', Divider);
app.component('Chart', Chart);
app.use(ToastService);
app.mount('#app')
