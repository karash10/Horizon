import HeaderBox from "@/components/HeaderBox"
import TotakBalanceBox from "@/components/TotakBalanceBox"
const Home = () => {
  const loggedin={firstname:'Karash'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="W  elcome"
            user={loggedin?.firstname || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotakBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            />
        </header>
      </div>
    </section>
  )
}

export default Home
