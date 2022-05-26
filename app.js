values = [{
        day: "mon",
        amount: 17.45,
    },
    {
        day: "tue",
        amount: 34.91,
    },
    {
        day: "wed",
        amount: 52.36,
    },
    {
        day: "thu",
        amount: 31.07,
    },
    {
        day: "fri",
        amount: 23.39,
    },
    {
        day: "sat",
        amount: 43.28,
    },
    {
        day: "sun",
        amount: 25.48,
    }
]

const chartContainer = document.getElementById('chart')

/* Creating an array of the days of the week. */
var xValues = values.map(function (item) {
    return item.day
})

/* Creating an array of the amounts. */
var yValues = values.map(function (item) {
    return item.amount
})

const max = Math.max(...yValues);
var barColors = 'hsl(10, 79%, 65%)'
var maxColors = 'hsl(186, 34%, 60%)'
const backgroundcolor = [];
for (i = 0; i < yValues.length; i++) {
    if (yValues[i] < max) {
        backgroundcolor.push(barColors)
    } else {
        backgroundcolor.push(maxColors)
    }
}

const myChart = new Chart(chartContainer, {
    type: 'bar',
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: backgroundcolor,
            data: yValues,
            borderRadius: 5,
            borderSkipped: false,
        }]
    },
    options: {
        plugins: {
            tooltip: {
                yAlign: 'bottom',
                displayColors: false,
                titleMarginBottom: 0,
                backgroundColor: 'hsl(25, 47%, 15%)',
                caretPadding: 10,
                caretSize: 0,
                callbacks: {
                    title: () => null,
                    label: (context) => {
                        let label = "$" + context.raw
                        console.log(label)
                        return label;
                    }
                }
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                }
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false,
                },
                ticks: {
                    display: false
                }
            }
        }
    }
})