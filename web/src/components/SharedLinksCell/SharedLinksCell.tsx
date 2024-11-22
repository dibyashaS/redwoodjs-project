import type { SharedLinksQuery, SharedLinksQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import SharedLink from '../SharedLink/SharedLink'

export const QUERY: TypedDocumentNode<
  SharedLinksQuery,
  SharedLinksQueryVariables
> = gql`
  query SharedLinksQuery {
    sharedLinks {
      title
      id
      url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  sharedLinks,
}: CellSuccessProps<SharedLinksQuery>) => {
  return (
    <div>
      {sharedLinks.map((item) => {
        // Return the SharedLink component to ensure it renders
        return (
          <SharedLink
            key={item.id}
            title={item.title}
            username=""
            link={item.url}
            points={0}
            commentCount={0}
          />
        )
      })}
    </div>
  )
}
