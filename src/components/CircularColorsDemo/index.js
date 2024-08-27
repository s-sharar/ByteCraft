import dynamic from 'next/dynamic'

const CircularColorsDemo = dynamic(()=> {
    return import('./CircularColorsDemo');
})

export default CircularColorsDemo;
