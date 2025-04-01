
const WelcomeMessage = ({onGetClicked} ) => {

  return(

    <div className="welcome-message">
      <center>
      <h1>Welcome to Social Media</h1>
      <h3>No posts yet!</h3>
      <button type="button" className="btn btn-primary" onClick={onGetClicked}>Click to see Initial Posts</button>
      </center>
    </div>
  )

}

export default WelcomeMessage;