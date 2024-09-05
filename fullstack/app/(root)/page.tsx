import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = { firstName: "Fatima Ez-Zahraa"}

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome" //needs to be included in the translation
            user={loggedIn?.firstName || "Guest"} //needs to be included in the translation
            subtext= "Access and manage your account and transactions efficiently" //needs to be included in the translation
          />
          <TotalBalanceBox
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