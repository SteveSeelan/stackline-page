import { Sales } from "../../types";
import { Line, LineChart, XAxis, ResponsiveContainer } from "recharts";
import styles from './sales-graph.module.css';

// Format the month abbreviation
const formatMonth = (weekEnding: string) => {
    const date = new Date(weekEnding);
    const formatted = date.toLocaleString('default', { month: 'short' }).toUpperCase();

    return formatted; 
}

const SalesGraphCard = ({ data }: { data: Sales[] }) => {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Retail Sales</h2>
        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <XAxis
                dataKey="weekEnding" 
                tickFormatter={formatMonth}
                interval={4}
                stroke="#94a3b8"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <Line
                type="monotone"
                dataKey="retailSales"
                stroke="var(--retail-line-color)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="wholesaleSales"
                stroke="var(--wholesale-line-color)"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
};

export default SalesGraphCard;