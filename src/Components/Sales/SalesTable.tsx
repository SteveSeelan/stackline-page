import { useState } from "react";
import { Sales } from "../../types";
import styles from './sales-table.module.css';

type SortDirection = 'asc' | 'desc' | null
type SortColumn = keyof Sales | null

const SalesTable = ({ data }: { data: Sales[] }) => {
    const [sortColumn, setSortColumn] = useState<SortColumn>()
    const [sortDirection, setSortDirection] = useState<SortDirection>(null)

    const handleSort = (column: keyof Sales) => {
        if (sortColumn === column) {
        setSortDirection(prev => {
            if (prev === 'asc') return 'desc'
            if (prev === 'desc') return null
            return 'asc'
        })
        } else {
        setSortColumn(column)
        setSortDirection('asc')
        }
    }

    const getSortedData = () => {
        if (!sortColumn || !sortDirection) return data

        return [...data].sort((a, b) => {
        let aValue = a[sortColumn]
        let bValue = b[sortColumn]

        if (sortDirection === 'asc') {
            return aValue > bValue ? 1 : -1
        } else {
            return aValue < bValue ? 1 : -1
        }
        })
    }
    const headers = [['Week Ending', 'weekEnding'], ['Retail Sales', 'retailSales'], ['Wholesale Sales', 'wholesaleSales'], ['Units Sold', 'unitsSold'], ['Retailer Margin', 'retailerMargin']];

    const sortedData = getSortedData()

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.headerRow}>
                            {headers.map((header, index) => (
                                <th className={styles.headerCell} key={index} onClick={() => handleSort(header[1] as keyof Sales)}>
                                    <span>{header[1]}</span>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData.map((sale) => (
                        <tr key={sale.weekEnding} className={styles.row}>
                            <td className={styles.cell}>{sale.weekEnding}</td>
                            <td className={styles.cell}>{sale.retailSales}</td>
                            <td className={styles.cell}>{sale.wholesaleSales}</td>
                            <td className={styles.cell}>{sale.unitsSold}</td>
                            <td className={styles.cell}>{sale.retailerMargin}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesTable;