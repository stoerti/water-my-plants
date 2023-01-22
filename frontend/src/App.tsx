import React from 'react';
//import './App.css';
import MoistureChart, {PlantMoistureHistoryEntry} from "./charts/MoistureChart";

function App() {

  var data = [
    {
      "moistureLevel": 2097,
      "plant": "farn",
      "timestamp": "2023-01-21T15:00:00"
    },
    {
      "moistureLevel": 2116,
      "plant": "farn",
      "timestamp": "2023-01-21T15:10:00"
    },
    {
      "moistureLevel": 2144,
      "plant": "farn",
      "timestamp": "2023-01-21T15:20:00"
    },
    {
      "moistureLevel": 2175,
      "plant": "farn",
      "timestamp": "2023-01-21T15:30:00"
    },
    {
      "moistureLevel": 2197,
      "plant": "farn",
      "timestamp": "2023-01-21T15:40:00"
    },
    {
      "moistureLevel": 2229,
      "plant": "farn",
      "timestamp": "2023-01-21T15:50:00"
    },
    {
      "moistureLevel": 2075,
      "plant": "farn",
      "timestamp": "2023-01-21T16:00:00"
    },
    {
      "moistureLevel": 1952,
      "plant": "farn",
      "timestamp": "2023-01-21T16:10:00"
    },
    {
      "moistureLevel": 1870,
      "plant": "farn",
      "timestamp": "2023-01-21T16:20:00"
    },
    {
      "moistureLevel": 1806,
      "plant": "farn",
      "timestamp": "2023-01-21T16:30:00"
    },
    {
      "moistureLevel": 1764,
      "plant": "farn",
      "timestamp": "2023-01-21T16:40:00"
    },
    {
      "moistureLevel": 1728,
      "plant": "farn",
      "timestamp": "2023-01-21T16:50:00"
    },
    {
      "moistureLevel": 1695,
      "plant": "farn",
      "timestamp": "2023-01-21T17:00:00"
    },
    {
      "moistureLevel": 1695,
      "plant": "farn",
      "timestamp": "2023-01-21T17:10:00"
    },
    {
      "moistureLevel": 1696,
      "plant": "farn",
      "timestamp": "2023-01-21T17:20:00"
    },
    {
      "moistureLevel": 1696,
      "plant": "farn",
      "timestamp": "2023-01-21T17:30:00"
    },
    {
      "moistureLevel": 1706,
      "plant": "farn",
      "timestamp": "2023-01-21T17:40:00"
    },
    {
      "moistureLevel": 1710,
      "plant": "farn",
      "timestamp": "2023-01-21T17:50:00"
    },
    {
      "moistureLevel": 1713,
      "plant": "farn",
      "timestamp": "2023-01-21T18:00:00"
    },
    {
      "moistureLevel": 1723,
      "plant": "farn",
      "timestamp": "2023-01-21T18:10:00"
    },
    {
      "moistureLevel": 1727,
      "plant": "farn",
      "timestamp": "2023-01-21T18:20:00"
    },
    {
      "moistureLevel": 1728,
      "plant": "farn",
      "timestamp": "2023-01-21T18:30:00"
    },
    {
      "moistureLevel": 1738,
      "plant": "farn",
      "timestamp": "2023-01-21T18:40:00"
    },
    {
      "moistureLevel": 1742,
      "plant": "farn",
      "timestamp": "2023-01-21T18:50:00"
    },
    {
      "moistureLevel": 1745,
      "plant": "farn",
      "timestamp": "2023-01-21T19:00:00"
    },
    {
      "moistureLevel": 1755,
      "plant": "farn",
      "timestamp": "2023-01-21T19:10:00"
    },
    {
      "moistureLevel": 1760,
      "plant": "farn",
      "timestamp": "2023-01-21T19:20:00"
    },
    {
      "moistureLevel": 1764,
      "plant": "farn",
      "timestamp": "2023-01-21T19:30:00"
    },
    {
      "moistureLevel": 1774,
      "plant": "farn",
      "timestamp": "2023-01-21T19:40:00"
    },
    {
      "moistureLevel": 1777,
      "plant": "farn",
      "timestamp": "2023-01-21T19:50:00"
    },
    {
      "moistureLevel": 1787,
      "plant": "farn",
      "timestamp": "2023-01-21T20:00:00"
    },
    {
      "moistureLevel": 1792,
      "plant": "farn",
      "timestamp": "2023-01-21T20:10:00"
    },
    {
      "moistureLevel": 1796,
      "plant": "farn",
      "timestamp": "2023-01-21T20:20:00"
    },
    {
      "moistureLevel": 1806,
      "plant": "farn",
      "timestamp": "2023-01-21T20:30:00"
    },
    {
      "moistureLevel": 1813,
      "plant": "farn",
      "timestamp": "2023-01-21T20:40:00"
    },
    {
      "moistureLevel": 1819,
      "plant": "farn",
      "timestamp": "2023-01-21T20:50:00"
    },
    {
      "moistureLevel": 1824,
      "plant": "farn",
      "timestamp": "2023-01-21T21:00:00"
    },
    {
      "moistureLevel": 1834,
      "plant": "farn",
      "timestamp": "2023-01-21T21:10:00"
    },
    {
      "moistureLevel": 1841,
      "plant": "farn",
      "timestamp": "2023-01-21T21:20:00"
    },
    {
      "moistureLevel": 1855,
      "plant": "farn",
      "timestamp": "2023-01-21T21:30:00"
    },
    {
      "moistureLevel": 1860,
      "plant": "farn",
      "timestamp": "2023-01-21T21:40:00"
    },
    {
      "moistureLevel": 1870,
      "plant": "farn",
      "timestamp": "2023-01-21T21:50:00"
    },
    {
      "moistureLevel": 1877,
      "plant": "farn",
      "timestamp": "2023-01-21T22:00:00"
    },
    {
      "moistureLevel": 1887,
      "plant": "farn",
      "timestamp": "2023-01-21T22:10:00"
    },
    {
      "moistureLevel": 1892,
      "plant": "farn",
      "timestamp": "2023-01-21T22:20:00"
    },
    {
      "moistureLevel": 1902,
      "plant": "farn",
      "timestamp": "2023-01-21T22:30:00"
    },
    {
      "moistureLevel": 1909,
      "plant": "farn",
      "timestamp": "2023-01-21T22:40:00"
    },
    {
      "moistureLevel": 1919,
      "plant": "farn",
      "timestamp": "2023-01-21T22:50:00"
    },
    {
      "moistureLevel": 1930,
      "plant": "farn",
      "timestamp": "2023-01-21T23:00:00"
    },
    {
      "moistureLevel": 1937,
      "plant": "farn",
      "timestamp": "2023-01-21T23:10:00"
    },
    {
      "moistureLevel": 1947,
      "plant": "farn",
      "timestamp": "2023-01-21T23:20:00"
    },
    {
      "moistureLevel": 1956,
      "plant": "farn",
      "timestamp": "2023-01-21T23:30:00"
    },
    {
      "moistureLevel": 1966,
      "plant": "farn",
      "timestamp": "2023-01-21T23:40:00"
    },
    {
      "moistureLevel": 1973,
      "plant": "farn",
      "timestamp": "2023-01-21T23:50:00"
    },
    {
      "moistureLevel": 1984,
      "plant": "farn",
      "timestamp": "2023-01-22T00:00:00"
    },
    {
      "moistureLevel": 1994,
      "plant": "farn",
      "timestamp": "2023-01-22T00:10:00"
    },
    {
      "moistureLevel": 2005,
      "plant": "farn",
      "timestamp": "2023-01-22T00:20:00"
    },
    {
      "moistureLevel": 2016,
      "plant": "farn",
      "timestamp": "2023-01-22T00:30:00"
    },
    {
      "moistureLevel": 2030,
      "plant": "farn",
      "timestamp": "2023-01-22T00:40:00"
    },
    {
      "moistureLevel": 2043,
      "plant": "farn",
      "timestamp": "2023-01-22T00:50:00"
    },
    {
      "moistureLevel": 2052,
      "plant": "farn",
      "timestamp": "2023-01-22T01:00:00"
    },
    {
      "moistureLevel": 2065,
      "plant": "farn",
      "timestamp": "2023-01-22T01:10:00"
    },
    {
      "moistureLevel": 2079,
      "plant": "farn",
      "timestamp": "2023-01-22T01:20:00"
    },
    {
      "moistureLevel": 2090,
      "plant": "farn",
      "timestamp": "2023-01-22T01:30:00"
    },
    {
      "moistureLevel": 2107,
      "plant": "farn",
      "timestamp": "2023-01-22T01:40:00"
    },
    {
      "moistureLevel": 2116,
      "plant": "farn",
      "timestamp": "2023-01-22T01:50:00"
    },
    {
      "moistureLevel": 2133,
      "plant": "farn",
      "timestamp": "2023-01-22T02:00:00"
    },
    {
      "moistureLevel": 2144,
      "plant": "farn",
      "timestamp": "2023-01-22T02:10:00"
    },
    {
      "moistureLevel": 2165,
      "plant": "farn",
      "timestamp": "2023-01-22T02:20:00"
    },
    {
      "moistureLevel": 2180,
      "plant": "farn",
      "timestamp": "2023-01-22T02:30:00"
    },
    {
      "moistureLevel": 2203,
      "plant": "farn",
      "timestamp": "2023-01-22T02:40:00"
    },
    {
      "moistureLevel": 2058,
      "plant": "farn",
      "timestamp": "2023-01-22T02:50:00"
    },
    {
      "moistureLevel": 1983,
      "plant": "farn",
      "timestamp": "2023-01-22T03:00:00"
    },
    {
      "moistureLevel": 1888,
      "plant": "farn",
      "timestamp": "2023-01-22T03:10:00"
    },
    {
      "moistureLevel": 1819,
      "plant": "farn",
      "timestamp": "2023-01-22T03:20:00"
    },
    {
      "moistureLevel": 1764,
      "plant": "farn",
      "timestamp": "2023-01-22T03:30:00"
    },
    {
      "moistureLevel": 1727,
      "plant": "farn",
      "timestamp": "2023-01-22T03:40:00"
    },
    {
      "moistureLevel": 1695,
      "plant": "farn",
      "timestamp": "2023-01-22T03:50:00"
    },
    {
      "moistureLevel": 1691,
      "plant": "farn",
      "timestamp": "2023-01-22T04:00:00"
    },
    {
      "moistureLevel": 1691,
      "plant": "farn",
      "timestamp": "2023-01-22T04:10:00"
    },
    {
      "moistureLevel": 1695,
      "plant": "farn",
      "timestamp": "2023-01-22T04:20:00"
    },
    {
      "moistureLevel": 1695,
      "plant": "farn",
      "timestamp": "2023-01-22T04:30:00"
    },
    {
      "moistureLevel": 1696,
      "plant": "farn",
      "timestamp": "2023-01-22T04:40:00"
    },
    {
      "moistureLevel": 1700,
      "plant": "farn",
      "timestamp": "2023-01-22T04:50:00"
    },
    {
      "moistureLevel": 1706,
      "plant": "farn",
      "timestamp": "2023-01-22T05:00:00"
    },
    {
      "moistureLevel": 1710,
      "plant": "farn",
      "timestamp": "2023-01-22T05:10:00"
    },
    {
      "moistureLevel": 1710,
      "plant": "farn",
      "timestamp": "2023-01-22T05:20:00"
    },
    {
      "moistureLevel": 1713,
      "plant": "farn",
      "timestamp": "2023-01-22T05:30:00"
    },
    {
      "moistureLevel": 1717,
      "plant": "farn",
      "timestamp": "2023-01-22T05:40:00"
    },
    {
      "moistureLevel": 1723,
      "plant": "farn",
      "timestamp": "2023-01-22T05:50:00"
    },
    {
      "moistureLevel": 1727,
      "plant": "farn",
      "timestamp": "2023-01-22T06:00:00"
    },
    {
      "moistureLevel": 1728,
      "plant": "farn",
      "timestamp": "2023-01-22T06:10:00"
    },
    {
      "moistureLevel": 1728,
      "plant": "farn",
      "timestamp": "2023-01-22T06:20:00"
    },
    {
      "moistureLevel": 1732,
      "plant": "farn",
      "timestamp": "2023-01-22T06:30:00"
    },
    {
      "moistureLevel": 1742,
      "plant": "farn",
      "timestamp": "2023-01-22T06:40:00"
    },
    {
      "moistureLevel": 1742,
      "plant": "farn",
      "timestamp": "2023-01-22T06:50:00"
    },
    {
      "moistureLevel": 1749,
      "plant": "farn",
      "timestamp": "2023-01-22T07:00:00"
    },
    {
      "moistureLevel": 1755,
      "plant": "farn",
      "timestamp": "2023-01-22T07:10:00"
    },
    {
      "moistureLevel": 1759,
      "plant": "farn",
      "timestamp": "2023-01-22T07:20:00"
    },
    {
      "moistureLevel": 1759,
      "plant": "farn",
      "timestamp": "2023-01-22T07:30:00"
    },
    {
      "moistureLevel": 1764,
      "plant": "farn",
      "timestamp": "2023-01-22T07:40:00"
    },
    {
      "moistureLevel": 1770,
      "plant": "farn",
      "timestamp": "2023-01-22T07:50:00"
    },
    {
      "moistureLevel": 1774,
      "plant": "farn",
      "timestamp": "2023-01-22T08:00:00"
    },
    {
      "moistureLevel": 1777,
      "plant": "farn",
      "timestamp": "2023-01-22T08:10:00"
    },
    {
      "moistureLevel": 1781,
      "plant": "farn",
      "timestamp": "2023-01-22T08:20:00"
    },
    {
      "moistureLevel": 1791,
      "plant": "farn",
      "timestamp": "2023-01-22T08:30:00"
    },
    {
      "moistureLevel": 1792,
      "plant": "farn",
      "timestamp": "2023-01-22T08:40:00"
    },
    {
      "moistureLevel": 1796,
      "plant": "farn",
      "timestamp": "2023-01-22T08:50:00"
    },
    {
      "moistureLevel": 1806,
      "plant": "farn",
      "timestamp": "2023-01-22T09:00:00"
    },
    {
      "moistureLevel": 1809,
      "plant": "farn",
      "timestamp": "2023-01-22T09:10:00"
    },
    {
      "moistureLevel": 1819,
      "plant": "farn",
      "timestamp": "2023-01-22T09:20:00"
    },
    {
      "moistureLevel": 1823,
      "plant": "farn",
      "timestamp": "2023-01-22T09:30:00"
    },
    {
      "moistureLevel": 1828,
      "plant": "farn",
      "timestamp": "2023-01-22T09:40:00"
    },
    {
      "moistureLevel": 1838,
      "plant": "farn",
      "timestamp": "2023-01-22T09:50:00"
    },
    {
      "moistureLevel": 1845,
      "plant": "farn",
      "timestamp": "2023-01-22T10:00:00"
    },
    {
      "moistureLevel": 1851,
      "plant": "farn",
      "timestamp": "2023-01-22T10:10:00"
    },
    {
      "moistureLevel": 1856,
      "plant": "farn",
      "timestamp": "2023-01-22T10:20:00"
    },
    {
      "moistureLevel": 1870,
      "plant": "farn",
      "timestamp": "2023-01-22T10:30:00"
    },
    {
      "moistureLevel": 1873,
      "plant": "farn",
      "timestamp": "2023-01-22T10:40:00"
    },
    {
      "moistureLevel": 1883,
      "plant": "farn",
      "timestamp": "2023-01-22T10:50:00"
    },
    {
      "moistureLevel": 1888,
      "plant": "farn",
      "timestamp": "2023-01-22T11:00:00"
    },
    {
      "moistureLevel": 1898,
      "plant": "farn",
      "timestamp": "2023-01-22T11:10:00"
    },
    {
      "moistureLevel": 1905,
      "plant": "farn",
      "timestamp": "2023-01-22T11:20:00"
    },
    {
      "moistureLevel": 1919,
      "plant": "farn",
      "timestamp": "2023-01-22T11:30:00"
    },
    {
      "moistureLevel": 1924,
      "plant": "farn",
      "timestamp": "2023-01-22T11:40:00"
    },
    {
      "moistureLevel": 1937,
      "plant": "farn",
      "timestamp": "2023-01-22T11:50:00"
    },
    {
      "moistureLevel": 1951,
      "plant": "farn",
      "timestamp": "2023-01-22T12:00:00"
    },
    {
      "moistureLevel": 1956,
      "plant": "farn",
      "timestamp": "2023-01-22T12:10:00"
    },
    {
      "moistureLevel": 1969,
      "plant": "farn",
      "timestamp": "2023-01-22T12:20:00"
    },
    {
      "moistureLevel": 1983,
      "plant": "farn",
      "timestamp": "2023-01-22T12:30:00"
    },
    {
      "moistureLevel": 1994,
      "plant": "farn",
      "timestamp": "2023-01-22T12:40:00"
    },
    {
      "moistureLevel": 2005,
      "plant": "farn",
      "timestamp": "2023-01-22T12:50:00"
    },
    {
      "moistureLevel": 2020,
      "plant": "farn",
      "timestamp": "2023-01-22T13:00:00"
    },
    {
      "moistureLevel": 2037,
      "plant": "farn",
      "timestamp": "2023-01-22T13:10:00"
    },
    {
      "moistureLevel": 2052,
      "plant": "farn",
      "timestamp": "2023-01-22T13:20:00"
    },
    {
      "moistureLevel": 2069,
      "plant": "farn",
      "timestamp": "2023-01-22T13:30:00"
    },
    {
      "moistureLevel": 2084,
      "plant": "farn",
      "timestamp": "2023-01-22T13:40:00"
    },
    {
      "moistureLevel": 2107,
      "plant": "farn",
      "timestamp": "2023-01-22T13:50:00"
    },
    {
      "moistureLevel": 2122,
      "plant": "farn",
      "timestamp": "2023-01-22T14:00:00"
    },
    {
      "moistureLevel": 2143,
      "plant": "farn",
      "timestamp": "2023-01-22T14:10:00"
    },
    {
      "moistureLevel": 2161,
      "plant": "farn",
      "timestamp": "2023-01-22T14:20:00"
    },
    {
      "moistureLevel": 2180,
      "plant": "farn",
      "timestamp": "2023-01-22T14:30:00"
    },
    {
      "moistureLevel": 2207,
      "plant": "farn",
      "timestamp": "2023-01-22T14:40:00"
    },
    {
      "moistureLevel": 2052,
      "plant": "farn",
      "timestamp": "2023-01-22T14:50:00"
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <MoistureChart
            plant={"farn"}
            dryLimit={2200}
            wetLimit={1800}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
