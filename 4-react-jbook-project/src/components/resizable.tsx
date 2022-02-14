import { useEffect, useState } from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";
import './resizable.css';

interface ResizableProps {
    direction: 'horizontal' | 'vertical',
}


const Resizable: React.FC<ResizableProps> = ({ direction, children}) => {
    const [innerHeight, setInnerHeight] = useState(window.innerHeight);
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [width, setWdith] = useState(window.innerWidth * .75);

    useEffect(() => {
        let timer: any;

        const listener = () => {
            if(timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                setInnerHeight(window.innerHeight);
                setInnerWidth(window.innerWidth);
                if(window.innerWidth * .75 < width ) {
                    setWdith(window.innerWidth * .75)
                } 
            }, 100)
        }

        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener)
        }
    },[])

    let resizableProps: ResizableBoxProps = {
        minConstraints: [Infinity, 100],
        maxConstraints: [Infinity, innerHeight * 0.9],
        height: 300,
        width: Infinity,
        resizeHandles: ['s']
    };
    if(direction === 'horizontal') {
        resizableProps = {
            className: 'resize-horizontal',
            minConstraints:[innerWidth * .2, Infinity],
            maxConstraints:[innerWidth * .75, Infinity],
            height: Infinity,
            width,
            resizeHandles:['e'],
            onResizeStop: (event, data) => {
                setWdith(data.size.width)
            }
        }
    }
    return (<ResizableBox {...resizableProps}>
           {children}
        </ResizableBox>)
}
export default Resizable