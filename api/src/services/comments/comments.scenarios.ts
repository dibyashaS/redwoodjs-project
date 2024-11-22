import type { Prisma, Comment } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        updatedAt: '2024-11-22T06:36:58.032Z',
        title: 'String',
        link: {
          create: {
            updatedAt: '2024-11-22T06:36:58.032Z',
            title: 'String',
            url: 'String',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2024-11-22T06:36:58.032Z',
        title: 'String',
        link: {
          create: {
            updatedAt: '2024-11-22T06:36:58.032Z',
            title: 'String',
            url: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Comment, 'comment'>
