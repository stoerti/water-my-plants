import React, {Component} from "react";
import ReactApexChart from "react-apexcharts";
import {ApexOptions} from "apexcharts";
import exp from "constants";

export class PlantMoistureHistoryEntry {
    moistureLevel: number
    plant: string
    timestamp: string

    constructor(moistureLevel: number, plant: string, timestamp: string) {
        this.moistureLevel = moistureLevel;
        this.plant = plant;
        this.timestamp = timestamp;
    }
}

class MoistureChartProps {
    plant: string
    wetLimit: number
    dryLimit: number

    constructor(plant: string, wetLimit: number, dryLimit: number) {
        this.plant = plant;
        this.wetLimit = wetLimit;
        this.dryLimit = dryLimit;
    }
}

class MoistureChartState {
    history: PlantMoistureHistoryEntry[] | undefined
}

class MoistureChart extends Component<MoistureChartProps, MoistureChartState> {
    options: ApexOptions
    series: ApexAxisChartSeries

    constructor(props: MoistureChartProps) {
        super(props);
        this.state = {
            history: []
        }

        this.options = {
            chart: {
                id: "basic-bar",
                type: "line",
                zoom: {
                    autoScaleYaxis: true
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                type: "datetime"
            },
            yaxis: [
                {
                    title: {
                        text: "Moisture level"
                    },
                    min: -25,
                    max: 150,
                    tooltip: {enabled: true},
                    decimalsInFloat: 0,
                    tickAmount: 7
                },
                {
                    title: {
                        text: "Watering actions"
                    },
                    tooltip: {enabled: true},
                    opposite: true,
                    decimalsInFloat: 1,
                    min: 0,
                    max: 5,
                    tickAmount: 5
                },
                {
                    min: -25,
                    max: 150,
                    show: false,
                    tooltip: {enabled: false}
                },
                {
                    min: -25,
                    max: 150,
                    show: false,
                    tooltip: {enabled: false}
                }],
            stroke: {
                width: [2, 2, 4]
            }
        }

        this.series = [
            {
                name: "Moisture level",
                type: "line",
                data: []
//                data: props.history.map(value => this.mapToChartValue(value, this.props.dryLimit, this.props.wetLimit))
            },
            {
                name: "Watering actions",
                type: "column",
                data: [
                    [new Date("2023-01-21T15:40:00").getTime(), 1.0],
                    [new Date("2023-01-21T15:50:00").getTime(), 1.0],
                    [new Date("2023-01-21T16:00:00").getTime(), 2.0],
                    [new Date("2023-01-21T17:30:00").getTime(), 1.5],
                    [new Date("2023-01-21T17:40:00").getTime(), 1.5],
                    [new Date("2023-01-21T17:50:00").getTime(), 1.0],
                ]
            },
/*            {
                name: "Lower boundary",
                type: "line",
                data: [
                    [this.minTimestamp(this.props.history).getTime(), 0],
                    [this.maxTimestamp(this.props.history).getTime(), 0],
                ]
            },
            {
                name: "Upper boundary",
                type: "line",
                data: [
                    [this.minTimestamp(this.props.history).getTime(), 100],
                    [this.maxTimestamp(this.props.history).getTime(), 100],
                ]
            }*/
        ]
    }

    componentDidMount() {
        var sevenDaysAgo = new Date(new Date().getTime() - 86400000*7).toISOString();
        fetch('/plant/farn/history?from=' + sevenDaysAgo)
            .then((response) => {
                return response.json()
            }).then(data => {
                // @ts-ignore
                this.setState({history: data});
            })
    }

    mapToChartValue(entry: PlantMoistureHistoryEntry, dryLimit: number, wetLimit: number) {
        return [
            new Date(entry.timestamp).getTime(),
            (dryLimit - entry.moistureLevel) / (dryLimit - wetLimit) * 100
        ]
    }

    updateMoistureHistory(data: PlantMoistureHistoryEntry[]) {
        this.series[0].data = data.map(value => this.mapToChartValue(value, this.props.dryLimit, this.props.wetLimit))
    }

    minTimestamp(history: PlantMoistureHistoryEntry[]) {
        return new Date(history.map(v => new Date(v.timestamp).getTime()).reduce(function (a, b) {
            return a < b ? a : b;
        }))
    }

    maxTimestamp(history: PlantMoistureHistoryEntry[]) {
        return new Date(history.map(v => new Date(v.timestamp).getTime()).reduce(function (a, b) {
            return a > b ? a : b;
        }))
    }

    render() {
        if (this.state.history?.length === 0) {
            this.series = []
        } else {
            this.series = [
                {
                    name: "Moisture level",
                    type: "line",
                    data: this.state.history!!.map(value => this.mapToChartValue(value, this.props.dryLimit, this.props.wetLimit))
                },
                {
                    name: "Watering actions",
                    type: "column",
                    data: [
                        [new Date("2023-01-21T15:40:00").getTime(), 1.0],
                        [new Date("2023-01-21T15:50:00").getTime(), 1.0],
                        [new Date("2023-01-21T16:00:00").getTime(), 2.0],
                        [new Date("2023-01-21T17:30:00").getTime(), 1.5],
                        [new Date("2023-01-21T17:40:00").getTime(), 1.5],
                        [new Date("2023-01-21T17:50:00").getTime(), 1.0],
                    ]
                },
                {
                    name: "Lower boundary",
                    type: "line",
                    data: [
                        [this.minTimestamp(this.state.history!!).getTime(), 0],
                        [this.maxTimestamp(this.state.history!!).getTime(), 0],
                    ]
                },
                {
                    name: "Upper boundary",
                    type: "line",
                    data: [
                        [this.minTimestamp(this.state.history!!).getTime(), 100],
                        [this.maxTimestamp(this.state.history!!).getTime(), 100],
                    ]
                }
            ]
        }

        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <ReactApexChart
                            options={this.options}
                            series={this.series}
                            width={"100%"}
                            height={"500"}
                            />
                    </div>
                </div>
            </div>
        );
    }
}

export default MoistureChart;
