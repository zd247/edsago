import classnames from 'classnames'
import styles from './NewsletterSection.module.scss'

const NewsletterSection = () => {
  return (
    <section className={classnames(styles['newsletter'], styles['section'], styles['text-light'])}>
      <div className={styles['container-sm']}>
        <div className={classnames(styles['newsletter-inner'], styles['section-inner'])}>
          <div className={classnames(styles['newsletter-header'], styles['text-center'])}>
            <h2 className={classnames(styles['section-title'], styles['mt-0'])}>Stay in the know</h2>
            <p className={styles['section-paragraph']}>
              Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual
              presentation.
            </p>
          </div>
          <div
            className={classnames(
              styles['footer-form'],
              styles['newsletter-form'],
              styles['field'],
              styles['field-grouped']
            )}
          >
            <div className={classnames(styles['control'], styles['control-expanded'])}>
              <input className={styles['input']} type='email' name='email' placeholder='Your best email&hellip;' />
            </div>
            <div className={styles['control']}>
              <a
                className={classnames(
                  styles['button'],
                  styles['button-primary'],
                  styles['button-block'],
                  styles['button-shadow']
                )}
                href='#'
              >
                Early access
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection
