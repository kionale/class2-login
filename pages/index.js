import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import {useRouter} from 'next/router'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const router = useRouter();

  // formData is the current state and setFormData is the function to update current state
  const [formData, setFormData] = useState({
    firstName: '',
    username : ''
  })

  
  const CheckLogin = () => {
    console.log(formData.firstName);
    console.log(formData);

    if (FormData.username !== null) {
      router.push({
        pathname: './counter',
        query: {
          username : formData.username
        }

      })
    }
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
          
        
        <div className = {styles.form}>
        <label className={styles.formLabel}>First name :</label>
        <input
          type="text"
            id="first"
            className={styles.input}
          name="first"
          pattern="[A-Z] {1} [a-z] {2,10}"
          title="The first letter should be uppercase"
          onChange ={(e => setFormData ({...formData,firstName: e.target.value}))}
        />

        <label className={styles.formLabel}> User name:</label>
        <input
          type="text"
          id="username"
            name="username"
            className={styles.input}
          required
          minLength="5"
          maxLength="10"
          onChange={(e => setFormData({ ...formData, username: e.target.value }))}
        />
        </div>
        <button className={styles.submitBtn}type= "submit" onClick={() => CheckLogin()}>Submit</button>


      </main>
    </>
  )
}
