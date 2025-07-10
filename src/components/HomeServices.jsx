import React from 'react'

const HomeServices = ({data}) => {
  return (
    <section className="MainServices" aria-label='service-section'>
        <div className="container">
          <div className="text-center py-5">
            <h1 className="big-text text-blue">Our Services</h1>
            <p className="normal-text">
              Experience seamless service excellence with{" "}
              <span>Mass Holdings PVvt. Ltd.</span>
            </p>
          </div>
          <div className="row">
            {data
              ? data?.map((service, index) => (
                  <div key={index} className="col-sm-12 col-md-6 col-lg-4 pb-5">
                      <div className='service-card bg-red text-white py-4 px-3 d-flex flex-column align-items-center gap-3 text-center rounded-4'>
                        <img
                          src={service.DocPath}
                          alt={service.title}
                          height="100"
                        ></img>
                        <h2 className='header-text'>{service.title}</h2>
                        <p
                            className='small-text'
                          dangerouslySetInnerHTML={{
                            __html: service.description,
                          }}
                        ></p>
                      </div>
                  </div>
                ))
              : "No Data"}
          </div>
        </div>
    </section>
  )
}

export default HomeServices