let ctx = document.querySelector('#mychart').getContext('2d');
let data = {
    labels: ['Janv', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
    datasets: [{
       label: 'ventes',
       data: [12, 20, 6, 4, 8, 10],
       backgroundColor: '#3A8EBA',
       borderColor: 'blue',
       borderWidth: 1
    }]
}
let myChart = new Chart(ctx, {
    type: 'line' ,
    data: data ,
    options: {
        responsive : true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
              display: true,
              text: 'My chart',
            }
        }
    }
});
console.log(data);
