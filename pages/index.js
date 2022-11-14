import useCart from '../store/useCartStore'

export default function Home({initialUsers}) {
  const total = useCart(state=>state.total);
  console.log('client', total)

  return (
    <h1>HELLO Next</h1>
  )
}

const getServerSideProps = async({  }) =>{
  // zustand store
  useCart.setState({total:20})
  console.log('server', useCart.getState().total)

  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props:{
      initialUsers : data
    }
  }
};

export {getServerSideProps} ;