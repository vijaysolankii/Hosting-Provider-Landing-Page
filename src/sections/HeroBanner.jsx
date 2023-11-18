import React from 'react'
import Button from '../components/Button'

const HeroBanner = () => {
  return (
    <section className='banner'>
        <div className="container">
            <div className="row">
                <div className="banner-content w-6/12">
                    <h1>The best and <strong>chepest</strong> hosting for your website</h1>
                    <p>Hosting your website here is easy. access it fast, server security is very well maintained. and of course supported by reliable servers.</p>
                    <div className="btnWrap">
                        <Button text="login" />
                    </div>
                </div>
                <div className="banner-img w-6/12">
                    <figure>
                        <img src="" alt="" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroBanner