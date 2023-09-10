'use client'
import { useRouter } from 'next/navigation'
import { Button } from '@components'
import styles from './styles.module.scss'

const Subscribed = (props: any) => {
  const router = useRouter()
  const { email } = props.searchParams

  return (
    <div className={styles.subscribed}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={'/assets/iconSuccess.svg'} />
          <h1>Thanks for<br/>subscribing!</h1>
          <p>
            A confirmation email has been sent to <strong>{email}</strong>. Please open 
            it and click the button inside to confirm your subscription.
          </p>
        </div>

        <Button onClick={() => router.push('/')}>
          Dismiss message
        </Button>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { email } = query;

  return {
    props: {
      email
    }
  };
}

export default Subscribed