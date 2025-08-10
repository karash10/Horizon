import HeaderBox from "@/components/HeaderBox"
const Home = () => {
  const loggedin={firstname:'Karash'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="welcome"
            user={loggedin?.firstname || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />
        </header>
      </div>
    </section>
  )
}

export default Home
