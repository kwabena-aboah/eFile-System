var morrisCharts = function() {

    Morris.Line({
      element: 'morris-line-example',
      data: [
        { y: '2014', a: 100, b: 90 },
        { y: '2015', a: 75,  b: 65 },
        { y: '2016', a: 50,  b: 40 },
        { y: '2017', a: 75,  b: 65 },
        { y: '2018', a: 50,  b: 40 },
        { y: '2019', a: 75,  b: 65 },
        { y: '2020', a: 100, b: 90 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Inward', 'Outward'],
      resize: true,
      lineColors: ['#33414E', '#FEA223']
    });


    Morris.Area({
        element: 'morris-area-example',
        data: [
            { y: '2014', a: 100, b: 90 },
            { y: '2015', a: 75,  b: 65 },
            { y: '2016', a: 50,  b: 40 },
            { y: '2017', a: 75,  b: 65 },
            { y: '2018', a: 50,  b: 40 },
            { y: '2019', a: 75,  b: 65 },
            { y: '2020', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Inward', 'Outward'],
        resize: true,
        lineColors: ['#33414E', '#FEA223']
    });


    Morris.Bar({
        element: 'morris-bar-example',
        data: [
            { y: '2014', a: 100, b: 90 },
            { y: '2015', a: 75,  b: 65 },
            { y: '2016', a: 50,  b: 40 },
            { y: '2017', a: 75,  b: 65 },
            { y: '2018', a: 50,  b: 40 },
            { y: '2019', a: 75,  b: 65 },
            { y: '2020', a: 100, b: 90 }
        ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Inward', 'Outward'],
        lineColors: ['#33414E', '#FEA223']
    });


    Morris.Donut({
        element: 'morris-donut-example',
        data: [
            {label: "Inward Correspondence", value: 12},
            {label: "Outward Correspondence", value: 30}
        ],
        colors: ['#95B75D', '#FEA223']
    });

}();
