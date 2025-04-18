<template>
    <Fieldset legend="Charts">
        <div class="p-10">
                <Chart type="line" :data="chartData" :options="chartOptions" class="h-[30rem] w-3xl" />
        </div>
    </Fieldset>

</template>

<script>
export default {
    data() {
        return {
            chartData: null,
            chartOptions: null
        }
    },
    methods: {
        setChartData() {
            const documentStyle = getComputedStyle(document.documentElement);

            return {
                labels: ['10:00', '10:01', '10:02', '10:03', '10:04', '10:05', '10:06', '10:07', '10:08', '10:09'],
                datasets: [
                    {
                        label: 'CPU Usage (%)',
                        data: [30, 32, 31, 33, 32, 60, 45, 90, 40, 85],
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
                        tension: 0.3
                    },
                    {
                        label: 'Memory Usage (%)',
                        data: [50, 51, 50, 52, 51, 65, 80, 60, 85, 70],
                        fill: false,
                        borderColor: documentStyle.getPropertyValue('--p-gray-500'),
                        tension: 0.3
                    }
                ]
            };
        },
        setChartOptions() {
            const documentStyle = getComputedStyle(document.documentElement);
            const textColor = documentStyle.getPropertyValue('--p-text-color');
            const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
            const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

            return {
                maintainAspectRatio: false,
                aspectRatio: 0.6,
                plugins: {
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder
                        }
                    }
                }
            };
        }
    },
    mounted() {
        this.chartData = this.setChartData();
        this.chartOptions = this.setChartOptions();
    },
}
</script>