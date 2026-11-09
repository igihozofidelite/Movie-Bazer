Header
function Header() {
    return (
    <header className="flex justify-between items-center px-[6%] py-6">
        <a href="/" className="flex items-center shrink-0">
        <img src="/logo.png" alt="Movie Bazer Logo" className="w-[170px] h-auto block object-contain"/>
    </a>
      <nav className="flex gap-7 text-sm max-[600px]:hidden">
    <a className="text-purple-400 font-bold hover:text-purple-300 transition-colors" href="#">
      Home
    </a>
    <a className="text-white font-bold hover:text-purple-400 transition-colors" href="#">
      Explore
    </a>
    <a className="text-white font-bold hover:text-purple-400 transition-colors" href="#">
      Genres
    </a>
    <a className="text-white font-bold hover:text-purple-400 transition-colors" href="#">
      New
    </a>
    <a className="text-white font-bold hover:text-purple-400 transition-colors" href="#">
      Movies
    </a>
    <a className="text-white font-bold hover:text-purple-400 transition-colors" href="#">
      TV Shows
    </a>
  </nav>
</header>

  
  )
}
export default Header;