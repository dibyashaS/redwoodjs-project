import { render, screen, fireEvent } from '@redwoodjs/testing/web'

import SharedLink from './SharedLink'

describe('SharedLink', () => {
  it('renders successfully', () => {
    // Test that the component renders without throwing errors
    expect(() => {
      render(
        <SharedLink
          title={''}
          points={0}
          username={''}
          commentCount={0}
          link={''}
        />
      )
    }).not.toThrow()
  })

  it('displays the title', () => {
    const title = 'My Link'
    // Set up the test by rendering the component with props
    render(
      <SharedLink
        title={title}
        points={0}
        username="@dibyasha"
        commentCount={0}
        link="https://freakingfullstack.com"
      />
    )
    // Assert that the title is rendered in the document
    const titleElement = screen.getByText(title)
    expect(titleElement).toBeInTheDocument()
  })

  it('displays the points', () => {
    const points = 10
    // Render the component with points prop
    render(
      <SharedLink
        title="My Link"
        points={points}
        username="@dibyasha"
        commentCount={0}
        link="https://freakingfullstack.com"
      />
    )
    // Assert that points are displayed
    const pointsElement = screen.getByText(`${points}`)
    expect(pointsElement).toBeInTheDocument()
  })

  it('displays the username of the person who submitted the link', () => {
    const username = '@dibyasha'
    render(
      <SharedLink
        title="My Link"
        points={0}
        username={username}
        commentCount={0}
        link="https://freakingfullstack.com"
      />
    )
    const usernameElement = screen.getByText(username)
    expect(usernameElement).toBeInTheDocument()
  })

  it('links to the person that submitted the link', () => {
    const username = '@dibyasha'
    render(
      <SharedLink
        title="My Link"
        points={0}
        username={username}
        commentCount={0}
        link="https://freakingfullstack.com"
      />
    )
    const userLink = screen.getByText(username).closest('a') // Assuming username is wrapped in an <a> tag
    expect(userLink).toHaveAttribute('href', `/user/${username.slice(1)}`) // Adjust the URL format if necessary
  })

  it('displays the comment count', () => {
    const commentCount = 5
    render(
      <SharedLink
        title="My Link"
        points={0}
        username="@dibyasha"
        commentCount={commentCount}
        link="https://freakingfullstack.com"
      />
    )
    const commentCountElement = screen.getByText(`${commentCount} comments`)
    expect(commentCountElement).toBeInTheDocument()
  })

  it('links to the individual shared link page', () => {
    const link = 'https://freakingfullstack.com'
    render(
      <SharedLink
        title="My Link"
        points={0}
        username="@dibyasha"
        commentCount={0}
        link={link}
      />
    )
    const linkElement = screen.getByRole('link', { name: /My Link/i })
    expect(linkElement).toHaveAttribute('href', link)
  })

  it('links to the original URL', () => {
    const link = 'https://freakingfullstack.com'
    render(
      <SharedLink
        title="My Link"
        points={0}
        username="@dibyasha"
        commentCount={0}
        link={link}
      />
    )
    const linkElement = screen.getByRole('link', { name: /My Link/i })
    expect(linkElement).toHaveAttribute('href', link)
  })

  it('handles voting up', () => {
    render(
      <SharedLink
        title="My Link"
        points={0}
        username="@dibyasha"
        commentCount={0}
        link="https://freakingfullstack.com"
      />
    )
    const voteUpButton = screen.getByText('VOTE UP')
    expect(voteUpButton).toBeInTheDocument()

    // Simulate clicking the vote up button
    fireEvent.click(voteUpButton)

    // Assert that some state change or action happens after voting up
    // Example: Check if points have increased (this requires actual implementation of voting behavior)
    const updatedPoints = screen.getByText('1') // Assuming vote increments points by 1
    expect(updatedPoints).toBeInTheDocument()
  })
})
