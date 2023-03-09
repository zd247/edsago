import styles from './Content.module.scss'
import HeroSection from './HeroSection'

const Content = () => {
  return (
    <div className={styles['main-container']}>
      <HeroSection />
      {/* <section class='features section'>
        <div class='container'>
          <div class='features-inner section-inner'>
            <div class='features-header text-center'>
              <div class='container-sm'>
                <h2 class='section-title mt-0'>Meet April</h2>
                <p class='section-paragraph'>
                  Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or
                  visual presentation.
                </p>
              </div>
            </div>
            <div class='features-wrap'>
              <div class='feature text-center is-revealing'>
                <div class='feature-inner'>
                  <div class='feature-icon' style='background:#FFD2DA;'>
                    <svg width='88' height='88' xmlns='http://www.w3.org/2000/svg'>
                      <g fill='none' fill-rule='nonzero'>
                        <path d='M43 47v7a13 13 0 0 0 13-13v-7c-7.18 0-13 5.82-13 13z' fill='#FF6381' />
                        <path d='M32 41v4a9 9 0 0 0 9 9v-4a9 9 0 0 0-9-9z' fill='#FF97AA' />
                      </g>
                    </svg>
                  </div>
                  <h4 class='feature-title h3-mobile mb-8'>Powerful</h4>
                  <p class='text-sm'>
                    A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design
                    elements.
                  </p>
                </div>
              </div>
              <div class='feature text-center is-revealing'>
                <div class='feature-inner'>
                  <div class='feature-icon' style='background:#FFD8CD;'>
                    <svg width='88' height='88' xmlns='http://www.w3.org/2000/svg'>
                      <g fill='none' fill-rule='nonzero'>
                        <path
                          d='M54 56h-9a2 2 0 0 1-2-2V43a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2zm-9-13v10h9V43h-9z'
                          fill='#FCAC96'
                        />
                        <path
                          d='M41 50h-7V34h14v5h2v-5a2 2 0 0 0-2-2H34a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h7v-4z'
                          fill='#FC8464'
                        />
                      </g>
                    </svg>
                  </div>
                  <h4 class='feature-title h3-mobile mb-8'>Powerful</h4>
                  <p class='text-sm'>
                    A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design
                    elements.
                  </p>
                </div>
              </div>
              <div class='feature text-center is-revealing'>
                <div class='feature-inner'>
                  <div class='feature-icon' style='background:#C6FDF3;'>
                    <svg width='88' height='88' xmlns='http://www.w3.org/2000/svg'>
                      <g fill='none' fill-rule='nonzero'>
                        <circle fill='#1ADAB7' cx='38' cy='50' r='5' />
                        <path
                          d='M53 42h2v-8a1 1 0 0 0-1-1h-8v2h5.586l-8.293 8.293a1 1 0 1 0 1.414 1.414L53 36.414V42z'
                          fill='#1ADAB7'
                        />
                        <path
                          fill='#83F0DD'
                          d='M34 41.414l3-3 3 3L41.414 40l-3-3 3-3L40 32.586l-3 3-3-3L32.586 34l3 3-3 3zM55.414 48L54 46.586l-3 3-3-3L46.586 48l3 3-3 3L48 55.414l3-3 3 3L55.414 54l-3-3z'
                        />
                      </g>
                    </svg>
                  </div>
                  <h4 class='feature-title h3-mobile mb-8'>Powerful</h4>
                  <p class='text-sm'>
                    A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design
                    elements.
                  </p>
                </div>
              </div>
              <div class='feature text-center is-revealing'>
                <div class='feature-inner'>
                  <div class='feature-icon' style='background:#E0E1FE;'>
                    <svg width='88' height='88' xmlns='http://www.w3.org/2000/svg'>
                      <g fill='none' fill-rule='nonzero'>
                        <path
                          d='M41 42h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zM41 55h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z'
                          fill='#4950F6'
                        />
                        <path fill='#8D92FA' d='M45 34h10v2H45zM45 39h10v2H45zM45 47h10v2H45zM45 52h10v2H45z' />
                      </g>
                    </svg>
                  </div>
                  <h4 class='feature-title h3-mobile mb-8'>Powerful</h4>
                  <p class='text-sm'>
                    A pseudo-Latin text used in web design, layout, and printing in place of English to emphasise design
                    elements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='testimonials section'>
        <div class='testimonials-shape testimonials-shape-1'>
          <svg width='280' height='280' viewBox='0 0 280 280' xmlns='http://www.w3.org/2000/svg'>
            <defs>
              <linearGradient x1='100%' y1='0%' x2='0%' y2='100%' id='testimonials-shape-1'>
                <stop stop-color='#261FB6' offset='0%' />
                <stop stop-color='#4950F6' offset='100%' />
              </linearGradient>
            </defs>
            <circle
              cx='140'
              cy='685'
              r='140'
              transform='translate(0 -545)'
              fill='url(#testimonials-shape-1)'
              fill-rule='evenodd'
            />
          </svg>
        </div>
        <div class='testimonials-shape testimonials-shape-2'>
          <svg width='125' height='107' viewBox='0 0 125 107' xmlns='http://www.w3.org/2000/svg'>
            <g fill='none' fill-rule='evenodd'>
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
        <div class='testimonials-shape testimonials-shape-3'>
          <svg width='48' height='48' viewBox='0 0 48 48' mlns='http://www.w3.org/2000/svg'>
            <defs>
              <linearGradient x1='93.05%' y1='19.767%' x2='15.034%' y2='85.765%' id='testimonials-shape-3'>
                <stop stop-color='#FF3058' offset='0%' />
                <stop stop-color='#FF6381' offset='100%' />
              </linearGradient>
            </defs>
            <circle
              cx='24'
              cy='434'
              r='24'
              transform='translate(0 -410)'
              fill='url(#testimonials-shape-3)'
              fill-rule='evenodd'
            />
          </svg>
        </div>
        <div class='container'>
          <div class='testimonials-inner section-inner'>
            <h2 class='section-title mt-0 text-center'>Testimonials</h2>
            <div class='testimonials-wrap'>
              <div class='testimonial text-xs is-revealing'>
                <div class='testimonial-inner'>
                  <div class='testimonial-main'>
                    <div class='testimonial-header'>
                      <img class='mb-16' src='dist/images/testimonial-01.png' alt='Testimonial' />
                    </div>
                    <div class='testimonial-body'>
                      <p class='mb-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </div>
                  <div class='testimonial-footer'>
                    <div class='testimonial-link'>
                      <a href='#'>@martajones</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='testimonial text-xs is-revealing'>
                <div class='testimonial-inner'>
                  <div class='testimonial-main'>
                    <div class='testimonial-header'>
                      <img class='mb-16' src='dist/images/testimonial-02.png' alt='Testimonial' />
                    </div>
                    <div class='testimonial-body'>
                      <p class='mb-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </div>
                  <div class='testimonial-footer'>
                    <div class='testimonial-link'>
                      <a href='#'>@michealpahm</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class='testimonial text-xs is-revealing'>
                <div class='testimonial-inner'>
                  <div class='testimonial-main'>
                    <div class='testimonial-header'>
                      <img class='mb-16' src='dist/images/testimonial-03.png' alt='Testimonial' />
                    </div>
                    <div class='testimonial-body'>
                      <p class='mb-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                      </p>
                    </div>
                  </div>
                  <div class='testimonial-footer'>
                    <div class='testimonial-link'>
                      <a href='#'>@markbrown</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class='newsletter section text-light'>
        <div class='container-sm'>
          <div class='newsletter-inner section-inner'>
            <div class='newsletter-header text-center'>
              <h2 class='section-title mt-0'>Stay in the know</h2>
              <p class='section-paragraph'>
                Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual
                presentation.
              </p>
            </div>
            <div class='footer-form newsletter-form field field-grouped'>
              <div class='control control-expanded'>
                <input class='input' type='email' name='email' placeholder='Your best email&hellip;' />
              </div>
              <div class='control'>
                <a class='button button-primary button-block button-shadow' href='#'>
                  Early access
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default Content
