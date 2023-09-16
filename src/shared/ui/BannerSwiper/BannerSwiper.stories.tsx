import { ReactNode } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
// import {  BannerSwiper } from './BannerSwiper'
import { BannerSwiperDesktop as BannerSwiper } from './BannerSwiperDesktop'

const elementStyle = {
    padding: '20px 80px',
    background: 'green',
    border: 'blue 1px solid'
}

const elements: ReactNode[] = [
    <div key={1} style={elementStyle}>Example 01</div>,
    <div key={2} style={elementStyle}>Example 02</div>,
    <div key={3} style={elementStyle}>Example 03</div>,
    <div key={4} style={elementStyle}>Example 04</div>,
    <div key={5} style={elementStyle}>Example 05</div>,
    <div key={6} style={elementStyle}>Example 06</div>,
    <div key={7} style={elementStyle}>Example 07</div>,
    <div key={8} style={elementStyle}>Example 08</div>,
    <div key={9} style={elementStyle}>Example 09</div>,
    <div key={10} style={elementStyle}>Example 10</div>,
]

const meta = {
    title: 'shared/BannerSwiper',
    component: BannerSwiper,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    render: (args) => (
        <div style={{ border: 'red 1px solid', width: 800, margin: '0 auto' }}>
            <BannerSwiper {...args}/>
        </div>
    )
} satisfies Meta<typeof BannerSwiper>

export default meta
type Story = StoryObj<typeof meta>;

const args: Story['args'] = {
    elements
}

export const One: Story = {
    args: {
        ...args,
    }
}

export const Three: Story = {
    args: {
        ...args,
        rows: 3
    }
}
