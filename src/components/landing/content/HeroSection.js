import classnames from 'classnames'
import styles from './HeroSection.module.scss'

const HeroSection = () => {
  return (
    <section className={styles['hero']}>
      <div className={styles['container']}>
        <div className={styles['hero-inner']}>
          <div className={styles['hero-copy']}>
            <h1 className={classnames(styles['hero-title'], styles['mt-0'])}>edward saigon</h1>
            <p className={styles['hero-paragraph']}>
             Journey
            </p>
            <div className={classnames(styles['hero-form'], styles['field'], styles['field-grouped'])}>
              <div className={classnames(styles['control'], styles['control-expanded'])}>
                <input className={styles['input']} type='email' name='email' placeholder='Your best email&hellip;' />
              </div>
              <div className={styles['control']}>
                <a className={classnames(styles['button'], styles['button-block'], styles['button-primary'])} href='#'>
                  Vào
                </a>
              </div>
            </div>
          </div>
          <div className={styles['hero-illustration']}>
            <div className={classnames(styles['hero-shape'], styles['hero-shape-1'])}>
              <svg width='40' height='40' xmlns='http://www.w3.org/2000/svg' styles='overflow:visible'>
                <circle
                  cx='20'
                  cy='20'
                  r='20'
                  fill='#FFD8CD'
                  fillRule='evenodd'
                />
              </svg>
            </div>
            <div className={classnames(styles['hero-shape'], styles['hero-shape-2'])}>
              <svg width='88' height='88' xmlns='http://www.w3.org/2000/svg' styles='overflow:visible'>
                <circle
                  cx='44'
                  cy='44'
                  r='44'
                  fill='#FFD2DA'
                  fillRule='evenodd'
                />
              </svg>
            </div>
            <div className={styles['hero-main-shape']}>
              Hero section
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
