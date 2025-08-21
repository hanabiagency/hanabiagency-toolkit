import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gap: 16,
    children: (
      <>
        <div style={{ padding: '20px', background: '#f0f0f0' }}>Item 1</div>
        <div style={{ padding: '20px', background: '#f0f0f0' }}>Item 2</div>
        <div style={{ padding: '20px', background: '#f0f0f0' }}>Item 3</div>
      </>
    ),
  },
};

export const HorizontalStack: Story = {
  args: {
    gap: 24,
    style: { flexDirection: 'row' },
    children: (
      <>
        <div style={{ padding: '20px', background: '#e0e0e0' }}>Column 1</div>
        <div style={{ padding: '20px', background: '#e0e0e0' }}>Column 2</div>
        <div style={{ padding: '20px', background: '#e0e0e0' }}>Column 3</div>
      </>
    ),
  },
};