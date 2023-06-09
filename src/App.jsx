const App = () => {
  fetch('https://fakestoreapi.com/products/category/electronics')
      .then(res => res.json())
      .then(json => console.log(json))
  return (
    <h1>Hello world</h1>
  )
}

export default App
