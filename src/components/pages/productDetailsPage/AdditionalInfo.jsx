/* eslint-disable react/prop-types */
import { products } from ".././../../constants"
export const AdditionalInfo = ({productId}) => {
 
    const product = products.find(p => p.id === productId)
    const getInfoRows = (product) => {
        const rows = [];

        if (product.weight) rows.push({label: 'weight' , value: product.weight})
            if (product.color) rows.push({ label: 'Color', value: product.color });
    if (product.type) rows.push({ label: 'Type', value: product.type });
    if (product.category) rows.push({ label: 'Category', value: product.category });
    if (product.stockStatus) rows.push({ label: 'Stock Status', value: product.stockStatus });
    if (product.tags) rows.push({ label: 'Tags', value: product.tags.join(', ') });

    return rows;
    }
    if (!product) {
        return <div>Product not found</div>
    }
    const infoRows = getInfoRows(product)

    return (
        <>
        <div className="border rounded-lg overflow-hidden">
      <table>
        <tbody>
            {infoRows.map((row,index) => (
                <tr key={row.label}
                className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                >
           <td className="py-3 px-4 border-b font-medium text-gray-600 w-1/4">
                {row.label}
              </td>
              <td className="py-3 px-4 border-b text-gray-800">
                {row.value}
              </td>

                </tr>
            ))}
        </tbody>
        </table>    
        </div>
        </>
    )
}