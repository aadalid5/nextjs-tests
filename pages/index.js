import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({initialUsers}) {
  console.log(initialUsers)
  return (
    <h1>HELLO Next</h1>
  )
}

const getServerSideProps = async({  }) =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props:{
      initialUsers : data
    }
  }
};

export {getServerSideProps} ;