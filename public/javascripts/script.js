const options = {
  chart: {
    backgroundColor: "rgba(0,0,0,0)",
    type: 'networkgraph',
    style: {
      margin: 0
    }
  },
  title: {
    style: {
      display: 'none'
    }
  },
  tooltip: {
    enabled: false
  },
  plotOptions: {
    networkgraph: {
      keys: ['from', 'to'],
      layoutAlgorithm: {
        enableSimulation: true,
        integration: 'verlet',
        linkLength: 250
      }
    }
  },
  series: [
    {
      states: {
        hover: {
          enabled: false
        },
        inactive: {
          enabled: false
        }
      },
      color: 'rgba(255,255,255,0.74)',
      link: {
        width: 2,
        color: 'rgb(46,38,70)',
      },
      marker: {
        radius: 50,
        fillColor: 'rgb(255,255,255)',
        lineWidth: 2,
        lineColor: 'rgb(46,38,70)'
      },
      dataLabels: {
        style: {
          marginTop: "10px",
          fontFamily: "Garamond",
          fontSize: 12,
          fontWeight: "normal",
          color: "rgb(46,38,70)",
        },
        rotation: 0,
        linkTextPath: {
          enabled: false
        },
        linkFormat: '',
        enabled: true,
      },
      data: mindMap,
      type: "networkgraph"
    }
  ],
  credits: {
    enabled: false
  }
};

const initializeMindMap = () => Highcharts.chart('mind-map', options);
const initializeGlossary = () => {
  Object.keys(glossary).forEach(term => {
    const glossaryContainer = document.getElementById("glossary");
    let div = document.createElement("div");
    div.classList.add("term");
    div.innerHTML = `<div class="title">${term}</div><div class="definition">${glossary[term]}</div>`;
    glossaryContainer.appendChild(div)
  });
}

window.addEventListener('load', () => {
  initializeMindMap();
  initializeGlossary();
});

