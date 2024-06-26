import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";
import { twMerge } from "tailwind-merge";

const SalesCard = ({ className }: { className?: string }) => (
    <Card className={twMerge("lg:max-w-xs lg:mx-auto border rounded-lg", className)}>
        <Text>Course</Text>
        <Metric>$ 71,465</Metric>
        <Flex className="mt-4">
            <Text>32% of annual target</Text>
            <Text>$ 225,000</Text>
        </Flex>
        <ProgressBar value={35} className="mt-2" />
    </Card>
);

export default SalesCard;
