import type { Prisma, SharedLink } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SharedLinkCreateArgs>({
  sharedLink: {
    one: {
      data: {
        updatedAt: '2024-11-21T22:47:33.724Z',
        title: 'String',
        url: 'String',
      },
    },
    two: {
      data: {
        updatedAt: '2024-11-21T22:47:33.724Z',
        title: 'String',
        url: 'String',
      },
    },
  },
})

export type StandardScenario = ScenarioData<SharedLink, 'sharedLink'>
