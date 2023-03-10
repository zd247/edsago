import classnames from 'classnames'
import styles from './TestimonialSection.module.scss'
import Image from 'next/image'
import TestimonialImage1 from 'public/images/april/testimonial-01.png'
import TestimonialImage2 from 'public/images/april/testimonial-02.png'
import TestimonialImage3 from 'public/images/april/testimonial-03.png'

const TestimonialSection = () => {
  return (
    <section className={classnames(styles['testimonials'], styles['section'])}>
      <div className={classnames(styles['testimonials-shape'], styles['testimonials-shape-1'])}>
        <svg width='280' height='280' viewBox='0 0 280 280' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <linearGradient x1='100%' y1='0%' x2='0%' y2='100%' id='testimonials-shape-1'>
              <stop stopColor='#261FB6' offset='0%' />
              <stop stopColor='#4950F6' offset='100%' />
            </linearGradient>
          </defs>
          <circle
            cx='140'
            cy='685'
            r='140'
            transform='translate(0 -545)'
            fill='url(#testimonials-shape-1)'
            fillRule='evenodd'
          />
        </svg>
      </div>
      <div className={classnames(styles['testimonials-shape'], styles['testimonials-shape-2'])}>
        <svg width='125' height='107' viewBox='0 0 125 107' xmlns='http://www.w3.org/2000/svg'>
          <g fill='none' fillRule='evenodd'>
            <circle fill='#C6FDF3' cx='48' cy='59' r='48' />
            <path
              d='M58.536 39.713c0-6.884 1.72-14.007 5.163-21.368 3.443-7.36 8.167-13.458 14.173-18.292l11.645 7.91c-3.589 4.98-6.262 10.016-8.02 15.106S78.86 33.598 78.86 39.384v13.623H58.536V39.713z'
              fill='#55EBD0'
            />
            <path
              d='M93.252 39.713c0-6.884 1.722-14.007 5.164-21.368 3.442-7.36 8.166-13.458 14.172-18.292l11.646 7.91c-3.589 4.98-6.262 10.016-8.02 15.106s-2.637 10.529-2.637 16.315v13.623H93.252V39.713z'
              fill='#1ADAB7'
            />
          </g>
        </svg>
      </div>
      <div className={classnames(styles['testimonials-shape'], styles['testimonials-shape-3'])}>
        <svg width='48' height='48' viewBox='0 0 48 48' mlns='http://www.w3.org/2000/svg'>
          <defs>
            <linearGradient x1='93.05%' y1='19.767%' x2='15.034%' y2='85.765%' id='testimonials-shape-3'>
              <stop stopColor='#FF3058' offset='0%' />
              <stop stopColor='#FF6381' offset='100%' />
            </linearGradient>
          </defs>
          <circle
            cx='24'
            cy='434'
            r='24'
            transform='translate(0 -410)'
            fill='url(#testimonials-shape-3)'
            fillRule='evenodd'
          />
        </svg>
      </div>
      <div className={styles['container']}>
        <div className={classnames(styles['testimonials-inner'], styles['section-inner'])}>
          <h2 className={classnames(styles['section-title'], styles['mt-0'], styles['text-center'])}>Testimonials</h2>
          <div className={styles['testimonials-wrap']}>
            <div className={classnames(styles['testimonial'], styles['text-xs'], styles['is-revealing'])}>
              <div className={styles['testimonial-inner']}>
                <div className={styles['testimonial-main']}>
                  <div className={styles['testimonial-header']}>
                    <Image className={styles['mb-16']} src={TestimonialImage1} alt='Testimonial' />
                  </div>
                  <div className={styles['testimonial-body']}>
                    <p className={styles['mb-0']}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div className={styles['testimonial-footer']}>
                  <div className={styles['testimonial-link']}>
                    <a href='#'>@martajones</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={classnames(styles['testimonial'], styles['text-xs'], styles['is-revealing'])}>
              <div className={styles['testimonial-inner']}>
                <div className={styles['testimonial-main']}>
                  <div className={styles['testimonial-header']}>
                    <Image className={styles['mb-16']} src={TestimonialImage2} alt='Testimonial' />
                  </div>
                  <div className={styles['testimonial-body']}>
                    <p className={styles['mb-0']}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div className={styles['testimonial-footer']}>
                  <div className={styles['testimonial-link']}>
                    <a href='#'>@michealpahm</a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={classnames(
                styles['testimonial text-xs is-revealing'],
                styles['text-xs'],
                styles['is-revealing']
              )}
            >
              <div className={styles['testimonial-inner']}>
                <div className={styles['testimonial-main']}>
                  <div className={styles['testimonial-header']}>
                    <Image className={styles['mb-16']} src={TestimonialImage3} alt='Testimonial' />
                  </div>
                  <div className={styles['testimonial-body']}>
                    <p className={styles['mb-0']}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                </div>
                <div className={styles['testimonial-footer']}>
                  <div className={styles['testimonial-link']}>
                    <a href='#'>@markbrown</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection
