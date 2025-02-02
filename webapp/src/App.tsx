export const App = () => {
  const ideas = [
    { nick: 'cool-idea-nick-1', name: 'Idea 1', description: 'Description of idea 1...' },
    { nick: 'cool-idea-nick-2', name: 'Idea 2', description: 'Description of idea 2...' },
    { nick: 'cool-idea-nick-3', name: 'Idea 3', description: 'Description of idea 3...' },
    { nick: 'cool-idea-nick-4', name: 'Idea 4', description: 'Description of idea 4...' },
    { nick: 'cool-idea-nick-5', name: 'Idea 5', description: 'Description of idea 5...' },
  ]
  return (
    <div>
      <h1>dotIdeas.</h1>

      {ideas.map((idea) => {
        return (
          <div key={idea.nick}>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        )
      })}
    </div>
  )
}
