import Link from 'next/link';

const Navbar=()=>{
    return <div className="NavBar ">
  <nav className="flex py-6 ">
      <Link className="text-4xl hover:scale-110 hover:rotate-6 cursor-pointer shadow-xl ml-6 font-bold hover:text-yellow-600" href="/user-metamask">Crypto Portofolio</Link>

        <ul className="flex ml-20">
          
          <li className="hover:scale-110 hover:rotate-6">
            <div className="round font-bold hover:scale-110">
            <Link className="nav-link  hover:text-yellow-600" href="/NFT">
              NFT
            </Link></div>
          </li>
          <li className="hover:scale-110 hover:rotate-6">
            <div className="round font-bold hover:scale-110">
            <Link className="nav-link  hover:text-yellow-600" href="/charts">
              Charts
            </Link></div>
          </li>
          <li className="hover:scale-110 hover:rotate-6">
            <div className="round font-bold hover:scale-110">
              <Link className="nav-link  hover:text-yellow-600" href="/transactions">
                Transactions
              </Link></div>
            </li>
            <li className="hover:scale-110 hover:rotate-6">
              <div className="round font-bold hover:scale-110">
              <Link className="nav-link  hover:text-yellow-600" href="/deposit">
                Deposit
              </Link></div>
            </li>
        </ul>
      
      </nav>  
</div>
}

export default Navbar;