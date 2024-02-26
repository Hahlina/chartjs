import { Example } from 'src/components/Example.tsx';
import { LineChart } from 'src/components/LineChart/LineChart.tsx';
import { VerticalBarChart } from 'src/components/VerticalBarChart/VerticalBarChart.tsx';

import './App.css';

export const App = () => (
    <>
        <Example />
        <LineChart />
        <VerticalBarChart />
    </>
);
