export const schema = gql`
  type Comment {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    link: SharedLink!
    linkId: Int!
  }

  type Query {
    comments: [Comment!]! @requireAuth
    comment(id: Int!): Comment @requireAuth
  }

  input CreateCommentInput {
    title: String!
    linkId: Int!
  }

  input UpdateCommentInput {
    title: String
    linkId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @requireAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
