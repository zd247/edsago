import LandingPage from 'src/components/landing-page'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>
        Main dashboard page for user to see, admin will be re-directed to Admin Dashboard
      </h1>
      <LandingPage />
    </div>
  )
}

export default Home
