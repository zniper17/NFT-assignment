import React from 'react'

const Right = () => {
  const results=['Help Center','Platform Status','Partners','Gas-Free Marketplace','Suggestions','Discord Community','Newsletter','Blog','Docs'];
  const myAccount=['Profile','Favourites','My Collections','Settings'];
  const stats=['Rankings','Activity']
  const Company=['About','Careers']

  return (
    <div className='right-footer'>
        <div className='footer-right-row'> 
        <h3>Results</h3>
        <ul>
            {
              results.map(data => {
                return (<li> <a>{data}</a> </li>)
              })
            }
         
        </ul>
        </div>
        <div className='footer-right-row'> 
        <h3>MyAccount</h3>
        <ul>
          {
            myAccount.map(data => {
              return (<li> <a>{data}</a> </li>)
            })
          }
        </ul>
        <h3>Stats</h3>
        <ul>
          {
            stats.map(data => {
              return (<li> <a>{data}</a> </li>)
            })
          }
          </ul>
        </div>
        <div className='footer-right-row'> 
        <h3>Company</h3>
        <ul>
          {
            Company.map(data => {
              return (<li> <a>{data}</a> </li>)
            })
          }
          </ul>
        </div>
        <div className='stayInLoop'>
          <h3>Stay  In The Loop</h3>
          <p>Join our mailing list to stay in the loop with out newest feature releases,<br></br> NFT drops, and tips & tricks for navigating OpenSea.</p>
          <div className='sign-up' >
            <input type='text' placeholder='Email address' className='email-footer' ></input>
            <button className='btn'>Sign Up</button>
          </div>
        </div>
    </div>
  )
}

export default Right