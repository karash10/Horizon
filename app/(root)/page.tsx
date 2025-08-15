import HeaderBox from "@/components/HeaderBox"
import RightSidebar from "@/components/RightSidebar"
import TotalBalanceBox from "@/components/TotalBalanceBox"
const Home = () => {
  const loggedin={firstName:'Karash',lastName:"", email:'karash.123@gmail.com'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedin?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
            />
        </header>
      </div>
      <RightSidebar user={loggedin}  transactions={[]} banks={[{ currentBalance:123.50},{}]}/>
    </section>
  )
}

export default Home
