import './scroll.css'

export default function scrollIndicator() {
  return (
    <div className='scroll'>
      <div className="container">
  <div className="chevron"></div>
  <div className="chevron"></div>
  <div className="chevron"></div>
  <span className="text">Scroll down</span>
</div>
    </div>
  )
}