import styles from './Content.module.scss'
import HeroSection from './HeroSection'
import TestimonialSection from './TestimonialSection'
import NewsletterSection from './NewsletterSection'

const Content = () => {
  return (
    <div className={styles['main-container']}>
      <HeroSection />
      <TestimonialSection />
      <NewsletterSection />
    </div>
  )
}

export default Content
