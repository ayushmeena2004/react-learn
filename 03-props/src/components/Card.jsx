function Card(props) {
    return <div className="card">
              <img src="https://images.unsplash.com/photo-1778426140955-860c61985e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D" alt="Profile" />
              <h1>{props.user}</h1>
              <button>View Profile</button>
            </div>
}

export default Card