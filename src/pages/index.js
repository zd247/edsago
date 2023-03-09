import LandingPage from 'src/components/landing/LandingPage'
import classnames from 'classnames'
import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={classnames(styles['is-boxed'], styles['has-animations'])}>
      <LandingPage />
    </div>
  )
}

export default Home
