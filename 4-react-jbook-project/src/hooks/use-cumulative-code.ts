import { useTypedSelector } from '@/hooks/use-typed-selector';

export const useCumulativeCode = (cellId: string) => {
    return useTypedSelector((state) => {
        const { data, order } = state.cells;
        const orderedCells = order.map((id) => data[id]);
        const showFunc = `
            import _React from 'react';
            import _ReactDOM from 'react-dom';
            var show = (value) => {
                let newValue = value;
                const root = document.querySelector('#root');
                if (typeof value === 'object') {
                    if (value.$$typeof && value.props) {
                    _ReactDOM.render(value, root);
                    return;
                    } 
                    newvalue = JSON.stringify(value);
                }
                root.innerHTML = newValue;
            }`
        const showFuncNoop = 'var show = () => {}'
        const cumulativeCode = [];

        for(let c of orderedCells){
            if (c.type === 'code') {
                cumulativeCode.push(c.id === cellId ? showFunc : showFuncNoop);
                cumulativeCode.push(c.content);
            }
            if (c.id === cellId) break;
        }

        return cumulativeCode;
    }).join('\n');
};