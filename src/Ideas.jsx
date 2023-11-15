import Idea from './Idea.jsx';

function Ideas(props) {
  // props = {
    // allIdeas: [.......]
  // }

  const ideaCards = props.allIdeas.map(idea => {
    return <Idea text={idea} />
  })

  return (
    <>
      <h2>ALL IDEAS</h2>
      {ideaCards}
    </>
  )
}

export default Ideas;