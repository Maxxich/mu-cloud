import { ReactNode } from 'react'

// const elementStyle = {
//     padding: '20px 80px',
// }

const coloredRlementStyle = {
    padding: '20px 80px',
    background: 'green',
    border: 'blue 1px solid'
}

export const coloredElements: ReactNode[] = [
    <div key={1} style={coloredRlementStyle}>Example 01</div>,
    <div key={2} style={coloredRlementStyle}>Example 02</div>,
    <div key={3} style={coloredRlementStyle}>Example 03</div>,
    <div key={4} style={coloredRlementStyle}>Example 04</div>,
    <div key={5} style={coloredRlementStyle}>Example 05</div>,
    <div key={6} style={coloredRlementStyle}>Example 06</div>,
    <div key={7} style={coloredRlementStyle}>Example 07</div>,
    <div key={8} style={coloredRlementStyle}>Example 08</div>,
    <div key={9} style={coloredRlementStyle}>Example 09</div>,
    <div key={10} style={coloredRlementStyle}>Example 10</div>,
]

// export const elements: ReactNode[] = [
//     <div key={1} style={elementStyle}>Example 01</div>,
//     <div key={2} style={elementStyle}>Example 02</div>,
//     <div key={3} style={elementStyle}>Example 03</div>,
//     <div key={4} style={elementStyle}>Example 04</div>,
//     <div key={5} style={elementStyle}>Example 05</div>,
//     <div key={6} style={elementStyle}>Example 06</div>,
//     <div key={7} style={elementStyle}>Example 07</div>,
//     <div key={8} style={elementStyle}>Example 08</div>,
//     <div key={9} style={elementStyle}>Example 09</div>,
//     <div key={10} style={elementStyle}>Example 10</div>,
// ]