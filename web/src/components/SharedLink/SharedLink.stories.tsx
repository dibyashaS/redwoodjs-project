// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import SharedLink from './SharedLink'

const meta: Meta<typeof SharedLink> = {
  component: SharedLink,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SharedLink>

export const Primary: Story = {
  args: {
    title: 'My Shared Link',
    username: 'Dibyasha',
    link: 'https://freakingfullstack.com/',
  },
}
export const LinkWithPointsAndComments: Story = {
  args: {
    title: 'My Shared Link',
    points: 132,
    username: 'Dibyasha',
    commentCount: 12,
    link: 'https://freakingfullstack.com/',
  },
}
