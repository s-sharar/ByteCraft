import dynamic from 'next/dynamic'

const DivisionGroupsDemo = dynamic(()=> {
    return import('./DivisionGroupsDemo');
})

export default DivisionGroupsDemo;
