import { Sales } from "../../types";

const SalesTable = (sales: Array<Sales>) => {
    return (
        <div style={{ width: '100%' }}>
            <div style={{ 
                border: '1px solid #e2e8f0',
                borderRadius: '6px',
            }}>
                <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '14px',
                }}>
                <caption style={{
                    marginTop: '16px',
                    fontSize: '14px',
                    color: '#64748b',
                    captionSide: 'bottom'
                }}>
                    A list of your recent invoices.
                </caption>
                <thead>
                    <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <th style={{
                        height: '48px',
                        padding: '16px',
                        textAlign: 'left',
                        verticalAlign: 'middle',
                        fontWeight: '500',
                        color: '#64748b',
                        width: '100px'
                    }}>
                        Invoice
                    </th>
                    <th style={{
                        height: '48px',
                        padding: '16px',
                        textAlign: 'left',
                        verticalAlign: 'middle',
                        fontWeight: '500',
                        color: '#64748b'
                    }}>
                        Status
                    </th>
                    <th style={{
                        height: '48px',
                        padding: '16px',
                        textAlign: 'left',
                        verticalAlign: 'middle',
                        fontWeight: '500',
                        color: '#64748b'
                    }}>
                        Method
                    </th>
                    <th style={{
                        height: '48px',
                        padding: '16px',
                        textAlign: 'right',
                        verticalAlign: 'middle',
                        fontWeight: '500',
                        color: '#64748b'
                    }}>
                        Amount
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale) => (
                    <tr
                        key={sale.weekEnding}
                        style={{
                        borderBottom: '1px solid #e2e8f0',
                        transition: 'background-color 200ms',
                        }}
                        onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f8fafc'
                        }}
                        onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        }}
                    >
                        <td style={{
                        padding: '16px',
                        verticalAlign: 'middle',
                        fontWeight: '500'
                        }}>
                        {sale.retailSales}
                        </td>
                        <td style={{
                        padding: '16px',
                        verticalAlign: 'middle'
                        }}>
                        {sale.wholesaleSales}
                        </td>
                        <td style={{
                        padding: '16px',
                        verticalAlign: 'middle'
                        }}>
                        {sale.unitsSold}
                        </td>
                        <td style={{
                        padding: '16px',
                        verticalAlign: 'middle',
                        textAlign: 'right'
                        }}>
                        {sale.retailerMargin}
                        </td>
                    </tr>
                    ))}
                </tbody>
                <tfoot style={{
                    backgroundColor: '#1e293b',
                    color: 'white',
                    fontWeight: '500'
                }}>
                    <tr>
                    <td
                        colSpan={3}
                        style={{
                        padding: '16px',
                        verticalAlign: 'middle'
                        }}
                    >
                        Total
                    </td>
                    <td style={{
                        padding: '16px',
                        verticalAlign: 'middle',
                        textAlign: 'right'
                    }}>
                        $2,500.00
                    </td>
                    </tr>
                </tfoot>
                </table>
            </div>
        </div>
    );
};

export default SalesTable;