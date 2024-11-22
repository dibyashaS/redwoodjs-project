interface LinkProps {
  title: string
  points: number
  username: string
  commentCount: number
  link: string
}

const Link = ({
  title,
  points = 0,
  username,
  commentCount = 0,
  link,
}: LinkProps) => {
  const handleVote = () => {
    console.log('VOTE UP')
  }
  return (
    <div className="flex gap-5">
      <div className="flex flex-col">
        <button onClick={handleVote}>VOTE UP</button>
        <button>VOTE DOWN</button>
      </div>
      <div className="flex-1"></div>

      <h2>{title}</h2>
      <p>
        {points} points • submitted by {username} • {commentCount} comments
      </p>

      <div>
        <a href={link}>ARROW</a>
      </div>
    </div>
  )
}

export default Link
