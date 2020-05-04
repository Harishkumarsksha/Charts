// var ctx = document.getElementById('myChart').getContext('2d');

// // var mixedChart = new Chart(ctx, {
// //     type: 'bar',
// //     data: {
// //         datasets: [{
// //             label: 'Bar Dataset',
// //             data: [10, 20, 30, 40]
// //         }, {
// //             label: 'Line Dataset',
// //             data: [50, 50, 50, 50],

// //             // Changes this dataset to become a line
// //             type: 'line'
// //         }],
// //         labels: ['January', 'February', 'March', 'April']
// //     },
// //     options: {}
// // });

// function sineValues() {
//     var sine = []
//     var cosine = []
//     var indexval = []
//     //var i
//     for (var i = 1; i < 50; i++) {
//         sine.push(Math.sin(i))
//         cosine.push(Math.cos(i))

//         indexval.push(i)
//     }
//     return [indexval, sine, cosine]
// }


// var myChart = new Chart(ctx, {
//     type: 'line',//'doughnut',//'pie',//'radar',//'line',//'horizontalBar',//'line',//'bar',
//     data: {
//         labels: dataCheck[0],//sineValues()[0],//['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             // label: '# of Votes',
//             // data: [1, 1.5, 3, 5, 2, 3],
//             // // data: [{
//             // //     x: new Date(),
//             // //     y: 1
//             // // }, {
//             // //     t: new Date(),
//             // //     y: 10
//             // // }],

//             label: 'Sine function',
//             data: dataCheck[1],//sineValues()[1],
//             //data: sineValues()[2],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 // 'rgba(54, 162, 235, 0.2)',
//                 // 'rgba(255, 206, 86, 0.2)',
//                 // 'rgba(75, 192, 192, 0.2)',
//                 // 'rgba(153, 102, 255, 0.2)',
//                 // 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 // 'rgba(54, 162, 235, 1)',
//                 // 'rgba(255, 206, 86, 1)',
//                 // 'rgba(75, 192, 192, 1)',
//                 // 'rgba(153, 102, 255, 1)',
//                 // 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
//         // tooltips: {
//         //     mode: 'x',
//         // },
//         layout: {
//             padding: {
//                 left: 50,
//                 right: 0,
//                 top: 0,
//                 bottom: 0
//             }
//         },
//         legend: {
//             display: true,
//             labels: {
//                 fontColor: 'rgb(255, 99, 132)'
//             }
//         },
//         animation: {
//             duration: 1000,
//             easing: 'easeInOutSine',//'easeOutQuad', //'easeInQuad',//'linear',


//             // 'easeInOutQuad'
//             // 'easeInCubic'
//             // 'easeOutCubic'
//             // 'easeInOutCubic'
//             // 'easeInQuart'
//             // 'easeOutQuart'
//             // 'easeInOutQuart'
//             // 'easeInQuint'
//             // 'easeOutQuint'
//             // 'easeInOutQuint'
//             // 'easeInSine'
//             // 'easeOutSine'
//             // 'easeInOutSine'
//             // 'easeInExpo'
//             // 'easeOutExpo'
//             // 'easeInOutExpo'
//             // 'easeInCirc'
//             // 'easeOutCirc'
//             // 'easeInOutCirc'
//             // 'easeInElastic'
//             // 'easeOutElastic'
//             // 'easeInOutElastic'
//             // 'easeInBack'
//             // 'easeOutBack'
//             // 'easeInOutBack'
//             // 'easeInBounce'
//             // 'easeOutBounce'
//             // 'easeInOutBounce'

//         },
//         // onProgress: function (animation) {
//         //     progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
//         // },
//         title: {
//             display: true,
//             text: 'Custom Chart Title'
//         },
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });

$(document).ready(function () {
    console.log('whole page reloaded ')
});

$('#get-Data').click(function (e) {
    e.preventDefault();
    var data = "id=" + 1 + "&name=" + 'Hari';
    $.ajax({
        type: "GET",
        url: "book_details/",
        data: JSON.stringify(data),
        dataType: "json",

        success: function (response) {
            books = []
            // console.log(response.abooks[0].book)
            prices = []
            for (var i = 0; i < response.abooks.length; i++) {
                books.push(response.abooks[i].book)
            }

            for (var i = 0; i < response.aprices.length; i++) {
                prices.push(response.aprices[i].price)
            }
            console.log(books, prices)
            //return books, prices

            var ctx = document.getElementById('myChart').getContext('2d');


            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: books,
                    datasets: [{
                        label: 'Sine function',
                        data: prices,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
                    // tooltips: {
                    //     mode: 'x',
                    // },
                    layout: {
                        padding: {
                            left: 50,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }
                    },
                    legend: {
                        display: true,
                        labels: {
                            fontColor: 'rgb(255, 99, 132)'
                        }
                    },
                    animation: {
                        duration: 1000,
                        easing: 'easeInOutSine',

                    },
                    title: {
                        display: true,
                        text: 'Custom Chart Title'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        }
    });

});