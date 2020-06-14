var factoryYieldData = {
  labels: [
    "1 June",
    "2 June",
    "3 June",
    "4 June",
    "5 June",
    "6 June",
    "7 June",
    "8 June",
    "9 June",
    "10 June",
    "11 June",
    "12 June",
    "13 June",
    "14 June",
    "15 June",
    "16 June",
    "17 June",
    "18 June",
    "19 June",
    "20 June",
    "21 June",
    "22 June",
    "23 June",
    "24 June",
    "25 June",
    "26 June",
    "27 June",
    "28 June",
    "29 June",
    "30 June",
  ],
  datasets: [
    {
      label: "Result",
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      data: [79, 84, 84, 84, 75, 78, 79, 81, 81, 79.6],
    },
    {
      label: "Target (80.35)",
      fill: false,
      backgroundColor: "#f56954",
      borderColor: "#f56954",
      borderDash: [5, 5],
      borderWidth: 2,
      pointRadius: 0,
      data: [
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
        80.35,
      ],
    },
  ],
};

var sectionYieldData = {
  labels: [
    "1 June",
    "2 June",
    "3 June",
    "4 June",
    "5 June",
    "6 June",
    "7 June",
    "8 June",
    "9 June",
    "10 June",
    "11 June",
    "12 June",
    "13 June",
    "14 June",
    "15 June",
    "16 June",
    "17 June",
    "18 June",
    "19 June",
    "20 June",
    "21 June",
    "22 June",
    "23 June",
    "24 June",
    "25 June",
    "26 June",
    "27 June",
    "28 June",
    "29 June",
    "30 June",
  ],
  datasets: [
    {
      label: "Result",
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      data: [96, 97, 97, 97, 97, 96, 95, 97, 97, 95.91],
    },
    {
      label: "Target (95.50)",
      fill: false,
      backgroundColor: "#f56954",
      borderColor: "#f56954",
      borderDash: [5, 5],
      borderWidth: 2,
      pointRadius: 0,
      data: [
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
        95.5,
      ],
    },
  ],
};

var pdChartData = {
  labels: [
    "1 June",
    "2 June",
    "3 June",
    "4 June",
    "5 June",
    "6 June",
    "7 June",
    "8 June",
    "9 June",
    "10 June",
    "11 June",
    "12 June",
    "13 June",
    "14 June",
    "15 June",
    "16 June",
    "17 June",
    "18 June",
    "19 June",
    "20 June",
    "21 June",
    "22 June",
    "23 June",
    "24 June",
    "25 June",
    "26 June",
    "27 June",
    "28 June",
    "29 June",
    "30 June",
  ],
  datasets: [
    {
      //   barPercentage: 0.5,
      //   barThickness: 6,
      //   maxBarThickness: 8,
      //   minBarLength: 2,
      label: "Plan",
      backgroundColor: "rgb(210, 214, 222, 1)",
      data: [
        54,
        52,
        50,
        54,
        57,
        55,
        59,
        54,
        50,
        50,
        56,
        59,
        54,
        58,
        57,
        55,
        52,
        54,
        56,
        54,
        56,
        56,
        57,
        52,
        59,
        54,
        56,
        59,
        60,
        58,
      ],
    },
    {
      //   barPercentage: 0.5,
      //   barThickness: 6,
      //   maxBarThickness: 8,
      //   minBarLength: 2,
      label: "Result",
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      data: [56, 58, 55, 54, 57, 54, 55, 51, 51, 58],
    },
  ],
};

var ngSummaryData = {
  datasets: [
    {
      data: [9, 5, 8, 40, 2, 10],
      backgroundColor: [
        "#f56954",
        "#00a65a",
        "#f39c12",
        "#00c0ef",
        "#3c8dbc",
        "#d2d6de",
      ],
    },
  ],
  labels: ["Broken", "Overlap", "QC Thin", "QC Check", "Damage", "Other"],
};

var mcStatusData = {
  datasets: [
    {
      data: [3, 12],
      backgroundColor: ["#00a65a", "#f56954"],
    },
  ],
  labels: ["Running", "Stop"],
};

var mcProductivityChartData = {
  labels: ["2PL-1204", "2PL-1207", "2PL-1208"],
  datasets: [
    {
      label: "Slip",
      backgroundColor: "rgba(60,141,188,0.9)",
      data: [7, 9, 6],
    },
  ],
};

var mcEventData = {
  labels: ["2PL-1204", "2PL-1207", "2PL-1208"],
  datasets: [
    {
      label: "Change Item",
      backgroundColor: "#f56954",
      data: [0.5, 2, 0.4],
    },
    {
      label: "Broken Disk",
      backgroundColor: "#00a65a",
      data: [0.8, 0.1, 1.5],
    },
    {
      label: "Change Pad",
      backgroundColor: "#f39c12",
      data: [2, 3, 1.5],
    },
    {
      label: "Program",
      backgroundColor: "#4db6ac",
      data: [4, 5.5, 3],
    },
  ],
};

var wipData = {
  datasets: [
    {
      label: "Hour",
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      data: getRandData(20, 60, 800),

      type: "scatter",
    },
    {
      label: "Target",
      borderColor: "#f56954",
      data: [
        {
          x: 0,
          y: 90,
        },
        {
          x: 800,
          y: 90,
        },
      ],
      type: "line",
      fill: false,
    },
  ],
};

var manhourData = {
  labels: [
    "1 June",
    "2 June",
    "3 June",
    "4 June",
    "5 June",
    "6 June",
    "7 June",
    "8 June",
    "9 June",
    "10 June",
    "11 June",
    "12 June",
    "13 June",
    "14 June",
    "15 June",
    "16 June",
    "17 June",
    "18 June",
    "19 June",
    "20 June",
    "21 June",
    "22 June",
    "23 June",
    "24 June",
    "25 June",
    "26 June",
    "27 June",
    "28 June",
    "29 June",
    "30 June",
  ],
  datasets: [
    {
      label: "Plan",
      backgroundColor: "#f56954",
      borderColor: "#f56954",
      data: [
        1762,
        1755,
        1771,
        1765,
        1808,
        1850,
        1820,
        1789,
        1759,
        1779,
        1801,
        1780,
        1845,
        1758,
        1824,
        1836,
        1781,
        1829,
        1783,
        1758,
        1788,
        1811,
        1783,
        1759,
        1842,
        1825,
        1850,
        1830,
        1833,
        1809,
      ],
      type: "line",
      fill: false,
    },
    {
      //   barPercentage: 0.5,
      //   barThickness: 6,
      //   maxBarThickness: 8,
      //   minBarLength: 2,
      label: "Result",
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      data: [1836, 1820, 1876, 1845, 1842, 1840, 1858, 1782, 1857, 1876],
    },
  ],
};

var manhourPieData = {
  datasets: [
    {
      data: [38, 0, 34, 20],
      backgroundColor: ["#f56954", "#f39c12", "#00a65a", "#3c8dbc"],
    },
  ],
  labels: ["A", "B", "C", "Normal"],
};

var qcDailyTrendData1 = {
  datasets: [
    {
      label: "Hour",
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      data: getRandData(6, 6, 800),

      type: "scatter",
    },
    {
      label: "USL",
      borderColor: "#f56954",
      data: [
        {
          x: 0,
          y: 16,
        },
        {
          x: 800,
          y: 16,
        },
      ],
      type: "line",
      fill: false,
    },
    {
      label: "LSL",
      borderColor: "#f56954",
      data: [
        {
          x: 0,
          y: 2,
        },
        {
          x: 800,
          y: 2,
        },
      ],
      type: "line",
      fill: false,
    },
    {
      label: "UCL",
      borderColor: "#fbc02d",
      data: [
        {
          x: 0,
          y: 12,
        },
        {
          x: 800,
          y: 12,
        },
      ],
      type: "line",
      fill: false,
    },
    {
      label: "LCL",
      borderColor: "#fbc02d",
      data: [
        {
          x: 0,
          y: 5,
        },
        {
          x: 800,
          y: 5,
        },
      ],
      type: "line",
      fill: false,
    },
  ],
};

var qcDailyTrendData2 = {
  datasets: [
    {
      label: "Hour",
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      data: getRandData(6, 6, 800),

      type: "scatter",
    },
  ],
};

var qcDailyTrendData3 = {
  datasets: [
    {
      label: "Hour",
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      data: getRandData(6, 6, 800),

      type: "scatter",
    },
  ],
};

var qcmcProductivityChartData = {
  labels: ["LA020", "LA021"],
  datasets: [
    {
      label: "Slip",
      backgroundColor: "rgba(60,141,188,0.9)",
      data: [230, 210],
    },
  ],
};

var fmtTempData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  datasets: [
    {
      label: "Temperature",
      pointRadius: 2,
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      data: getRandData(10, 30, 20),
    },
    {
      label: "Target (40C)",
      fill: false,
      backgroundColor: "#f56954",
      borderColor: "#f56954",
      borderDash: [5, 5],
      borderWidth: 2,
      pointRadius: 0,
      data: [
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
        40,
      ],
      type: "line",
    },
  ],
};

var fmtHumidData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  datasets: [
    {
      label: "Humidity",
      pointRadius: 2,
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      data: getRandData(20, 50, 20),
    },
    {
      label: "Target (80)",
      fill: false,
      backgroundColor: "#f56954",
      borderColor: "#f56954",
      borderDash: [5, 5],
      borderWidth: 2,
      pointRadius: 0,
      data: [
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
        80,
      ],
      type: "line",
    },
  ],
};

var fmtApcData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  datasets: [
    {
      label: "APC",
      pointRadius: 2,
      fill: false,
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      borderColor: "rgba(60, 141, 188, 0.9)",
      data: getRandData(40, 70, 20),
    },
    {
      label: "Target (80)",
      fill: false,
      backgroundColor: "#f56954",
      borderColor: "#f56954",
      // borderDash: [5, 5],
      borderWidth: 2,
      pointRadius: 0,
      data: [
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
        120,
      ],
      type: "line",
    },
    {
      label: "Target (80)",
      fill: false,
      backgroundColor: "#f56954",
      borderColor: "#f56954",
      // borderDash: [5, 5],
      borderWidth: 2,
      pointRadius: 0,
      data: [
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
        60,
      ],
      type: "line",
    },
  ],
};

var fmtCwsData = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  datasets: [
    {
      label: "CWS",
      pointRadius: 2,
      fill: false,
      backgroundColor: "rgba(60, 141, 188, 0.9)",
      borderColor: "rgba(60, 141, 188, 0.9)",
      data: getRandData(3, 9, 20),
    },
    {
      label: "Target (80)",
      fill: false,
      backgroundColor: "#f56954",
      borderColor: "#f56954",
      // borderDash: [5, 5],
      borderWidth: 2,
      pointRadius: 0,
      data: [
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
        14,
      ],
      type: "line",
    },
    {
      label: "Target (80)",
      fill: false,
      backgroundColor: "#f56954",
      borderColor: "#f56954",
      // borderDash: [5, 5],
      borderWidth: 2,
      pointRadius: 0,
      data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
      type: "line",
    },
  ],
};

window.onload = function () {
  var ctx;
  ctx = document.getElementById("factoryYieldChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "line",
    data: factoryYieldData,
    options: {
      responsive: true,
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "June 2020",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              max: 100,
              min: 70,
              stepSize: 5,
            },
            scaleLabel: {
              display: true,
              labelString: "%",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("sectionYieldChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "line",
    data: sectionYieldData,
    options: {
      responsive: true,
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "June 2020",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              max: 100,
              min: 90,
              stepSize: 2,
            },
            scaleLabel: {
              display: true,
              labelString: "%",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("pdChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: pdChartData,
    options: {
      responsive: true,
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "June 2020",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              max: 65,
              min: 0,
              stepSize: 10,
            },
            scaleLabel: {
              display: true,
              labelString: "slip",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("ngSummaryChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "doughnut",
    data: ngSummaryData,
    options: {
      responsive: true,
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "10 June 2020",
      },
    },
  });

  ctx = document.getElementById("mcStatusChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "doughnut",
    data: mcStatusData,
    options: {
      responsive: true,
      legend: {
        position: "right",
      },
      title: {
        display: false,
        text: "10 June 2020",
      },
      circumference: this.Math.PI,
      rotation: -this.Math.PI,
    },
  });

  ctx = document.getElementById("mcProductivityChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: mcProductivityChartData,
    options: {
      responsive: true,
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "June 2020",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              max: 10,
              min: 0,
              stepSize: 2,
            },
            scaleLabel: {
              display: true,
              labelString: "slip",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("mcEventChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: mcEventData,
    options: {
      responsive: true,
      legend: {
        position: "bottom",
      },
      title: {
        display: false,
        text: "June 2020",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
            stacked: true,
          },
        ],
        yAxes: [
          {
            // ticks: {
            //   max: 65,
            //   min: 0,
            //   stepSize: 10,
            // },
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: "hour",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("wipChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "scatter",
    data: wipData,
    options: {
      responsive: true,
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "2P ~ FCL",
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Time",
            },
            time: {
              unit: "minute",
            },
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: 100,
              stepSize: 10,
            },
            scaleLabel: {
              display: true,
              labelString: "hour",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("manhourChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: manhourData,
    options: {
      responsive: true,
      legend: {
        position: "top",
        display: true,
      },
      title: {
        display: true,
        text: "2P Manhour",
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Date",
            },
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              // min: 0,
              // max: 100,
              // stepSize: 10,
            },
            scaleLabel: {
              display: true,
              labelString: "hour",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("manhourPieChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "doughnut",
    data: this.manhourPieData,
    options: {
      responsive: true,
      legend: {
        position: "right",
      },
      title: {
        display: false,
        text: "Manhour by group",
      },
    },
  });

  ctx = document.getElementById("qcDailyTrendChart1").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "scatter",
    data: qcDailyTrendData1,
    options: {
      responsive: true,
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: true,
        text: "2P Thickness",
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Date",
            },
            // time: {
            //   unit: "minute",
            // },
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              min: -4,
              max: 20,
              stepSize: 2,
            },
            scaleLabel: {
              display: false,
              labelString: "hour",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("qcmcProductivityChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: qcmcProductivityChartData,
    options: {
      responsive: true,
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "June 2020",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              max: 240,
              min: 200,
              stepSize: 10,
            },
            scaleLabel: {
              display: true,
              labelString: "slip",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("fmtTempChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "line",
    data: fmtTempData,
    options: {
      responsive: true,
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "June 2020",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              max: 50,
              min: 0,
              stepSize: 10,
            },
            scaleLabel: {
              display: true,
              labelString: "C",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("fmtHumidChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "line",
    data: fmtHumidData,
    options: {
      responsive: true,
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "June 2020",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              max: 100,
              min: 0,
              stepSize: 20,
            },
            scaleLabel: {
              display: true,
              labelString: "Unit",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("fmtapcChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "line",
    data: fmtApcData,
    options: {
      responsive: true,
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "June 2020",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              max: 150,
              min: 0,
              stepSize: 30,
            },
            scaleLabel: {
              display: true,
              labelString: "Unit",
            },
          },
        ],
      },
    },
  });

  ctx = document.getElementById("fmtcwsChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "line",
    data: fmtCwsData,
    options: {
      responsive: true,
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "June 2020",
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              offsetGridLines: false,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              max: 15,
              min: 0,
              stepSize: 3,
            },
            scaleLabel: {
              display: true,
              labelString: "C",
            },
          },
        ],
      },
    },
  });
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandData(maxValue, offset, maxdata) {
  var jsonArr = [];

  for (var i = 0; i < maxdata; i++) {
    jsonArr.push({
      x: i,
      y: Math.floor(Math.random() * maxValue) + offset,
    });
  }
  return jsonArr;
}
