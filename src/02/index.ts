export interface Item {
    weight: number
    value: number
}

export const items: Item[] = [ { weight: 5, value: 10 }, { weight: 4, value: 40 }, { weight: 6, value: 30 }, { weight: 4, value: 50 } ]
export const items2: Item[] = [ { weight: 2, value: 4 }, { weight: 3, value: 5 }, { weight: 1, value: 3 }, { weight: 4, value: 7 } ]

export function knapsack(items: Item[], maxWeight: number): Item[] {
    const n = items.length;
    const table: number[][] = [];

    // buid weights table
    for(let i = 0; i <= n; i++) {
        if(!table[i]) {
            table[i] = [];
        }

        for(let w = 0; w <= maxWeight; w++) {
            if(i === 0 || w === 0) {
                table[i][w] = 0;
            } else if (items[i - 1].weight <= w) {
                const { value, weight } = items[i - 1];

                table[i][w] = Math.max(value + table[i - 1][w - weight], table[i -1][w]);
            } else {
                table[i][w] = table[i - 1][w];
            }
        }
    }

    // build selected items list
    const selectedItems: Item[] = [];
    let w = maxWeight;
    for (let i = n; i > 0; i--) {
        if (table[i][w] != table[i - 1][w]) {
            const itemIndex = i - 1;
            const item = items[itemIndex];
            selectedItems.push(item)
             w -= items[itemIndex].weight;
        }
    }

    return selectedItems;
}

export function calcValue(items: Item[]) {
    return items.reduce(((prevValue, currItem) => prevValue + currItem.value), 0);
}