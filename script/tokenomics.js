document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('pie-chart').getContext('2d');
    const data = {
        labels: [
            'Charity & Donations - 10%',
            'Community-Rewards - 10%',
            'Development & Marketing - 10%',
            'Liquidity Pool - 15%',
            'Team Allocation - 10%',
            'Ecosystem Growth - 45%',
            'Creators Wallet - 0.11%'
        ],
        datasets: [{
            data: [10, 10, 10, 15, 10, 45, 0.11],
            backgroundColor: ['#ff66de', '#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0', '#9966ff', '#ffab00'],
            borderColor: '#fff',
            borderWidth: 2
        }]
    };

    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.label;
                        }
                    }
                }
            }
        }
    });
});
