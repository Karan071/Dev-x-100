import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        // Add more items as needed
        { name: 'Sauce', value: 10 },
        { name: 'Potato chips', value: 30 },
        { name: 'Protein Powder', value: 60 },
        { name: 'Beans', value: 30 },
    ]);

    const totalValue = useMemo(() => {
        let result = 0;
        items.map((item) => {
            result += item.value;
        });
        return result;
    }, [items]);

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} :--: Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: ${totalValue}</p>
        </div>
    );
};
