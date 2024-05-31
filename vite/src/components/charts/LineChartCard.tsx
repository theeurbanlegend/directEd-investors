"use client"

import { Card, Metric, Text, AreaChart, BadgeDelta, Flex } from "@tremor/react";

const data = [
	{
		Month: "Jan 21",
		Sales: 2890,
		Profit: 2400,
		Customers: 4938,
	},
	{
		Month: "Feb 21",
		Sales: 1890,
		Profit: 1398,
		Customers: 2938,
	},
	// ...
	{
		Month: "Jul 21",
		Sales: 3490,
		Profit: 4300,
		Customers: 2345,
	},
];

const categories = [
	{
		title: "Course",
		metric: "$ 12,699",
		metricPrev: "$ 9,456",
		delta: "34.3%",
		deltaType: "moderateIncrease",
	},
];

const valueFormatter = (number: number) =>
	`${Intl.NumberFormat("us").format(number).toString()}`;

export default function LineChartCard() {
	return (
		<div className="w-[100%] ">
			{categories.map((item) => (
				<Card key={item.title} className="border rounded-lg">
					<Flex alignItems="start">
						<Text>{item.title}</Text>
						<BadgeDelta className="w-fit px-6 rounded-full text-xs text-white" deltaType={item.deltaType}>{item.delta}</BadgeDelta>
					</Flex>
					<Flex
						className="space-x-3 truncate"
						justifyContent="start"
						alignItems="baseline"
					>
						<Metric>{item.metric}</Metric>
						<Text>from {item.metricPrev}</Text>
					</Flex>
					<AreaChart
						className="w-full h-32"
						data={data}
						index="Month"
						valueFormatter={valueFormatter}
						categories={[item.title]}
						colors={["blue-500", "blue-300", "blue-100"]}
						showXAxis={true}
						showAnimation={true}
						showGridLines={false}
						showGradient={true}
						startEndOnly={true}
						showYAxis={false}
						showLegend={false}
					/>
				</Card>
			))}
		</div>
	);
}
