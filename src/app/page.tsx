/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Input } from '@components'
import { useWindowSize } from '@hooks'
import styles from './page.module.scss'

export default function Home() {
  const { width } = useWindowSize()
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const listData = [
    'Product discovery and building what matters',
    'Measuring to ensure updates are a success',
    'And much more!'
  ]

  const onSubmit = (e: any) => {
    e.preventDefault()
    const emailValidator = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
    const regexp = new RegExp(emailValidator)
    const valid = regexp.test(email)
    if (!valid) {
      setError('Valid email required')
      return
    }
    setError('')
    router.push(`/subscribed?email=${email}`)
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              {listData.map((text, idx) => (
                <li key={idx}>
                  <img src={'/assets/iconList.svg'} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
          
          <form>
            <Input
              label='Email address'
              value={email}
              setValue={setEmail}
              placeholder='email@company.com'
              errorMsg={error}
            />
            <Button onClick={(e) => onSubmit(e)}>
              Subscribe to monthly newsletter
            </Button>
          </form>
        </div>
        <div className={styles.imgContainer}>
          <img
            src={
              width && width >= 768
                ? 'assets/illustrationDesktop.svg'
                : 'assets/illustrationMobile.svg'
            }
            alt=''
          />
        </div>
      </div>
    </main>
  )
}
