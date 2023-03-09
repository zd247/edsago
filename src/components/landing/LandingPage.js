import classnames from 'classnames'
import Header from './Header'
import Content from './content/Content'
import styles from './LandingPage.module.scss'

const LandingPage = () => {
  return (
    <div className={classnames(styles['body-wrap'], styles['boxed-container'])}>
      <Header />
      <Content />
    </div>
  )
}

export default LandingPage
