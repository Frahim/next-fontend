import React from 'react'
import Navbar from '../../components/Navbar';
import { GrFormNext, GrFacebookOption, GrTwitter,GrInstagram,GrYoutube,GrPinterest,GrMap, GrPhone, GrMailOption }from "react-icons/gr";
import Link from 'next/link';
function Contact() {
  return (
    <>
      <Navbar />
      <div className='contactWrapper sectionPadding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 colsm-12'>
              <h2> What is Lorem Ipsum?</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <div className='contactInfo'>
              <div className='address'>
                <GrMap/><span> House # 764-763/A, Avenue #06, Road #10,<br/> Mirpur DOHS, Dhaka</span>
                </div>
                <div className='mt-5 phone'>
                <GrPhone/><span className='phone-wrap'>
                    <Link href='tel:+8801779898444'>+8801779898444</Link>,
                    <Link href='tel:+8801779898555'>+8801779898555</Link>,
                    <Link href='tel:+8801984800900'>+8801984800900</Link>,
                    <Link href='tel:+8801954541313'>+8801954541313</Link>,
                    <Link href='tel:02-51053841'>02-51053841</Link>,
                    <Link href='tel:02-51053842'>02-51053842</Link>,
                    <Link href='tel:02-51053843'>02-51053843</Link>
                  
                  </span>
                </div>
                <div className='mt-5 eamil address'>
                  <GrMailOption/>
                  <Link href='mailto:+8801779898444'>admin@agrilfoods.com</Link>
                </div>

              </div>
            </div>
            <div className='col-md-6 colsm-12'>
              <form className="innerContainer">
                <h1>Get in touch</h1>
                <div className="email block">
                  <label htmlFor="frm-email">Email</label>
                  <input
                    id="frm-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="block phone">
                  <label htmlFor="frm-phone">Phone</label>
                  <input
                    id="frm-phone"
                    type="text"
                    name="phone"
                    autoComplete="tel"
                    required
                  />
                </div>
                <div className="name block">
                  <div>
                    <label htmlFor="frm-first">First Name</label>
                    <input
                      id="frm-first"
                      type="text"
                      name="first"
                      autoComplete="given-name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="frm-last">Last Name</label>
                    <input
                      id="frm-last"
                      type="text"
                      name="last"
                      autoComplete="family-name"
                      required
                    />
                  </div>
                </div>
                <div className="message block">
                  <label htmlFor="frm-message">Message</label>
                  <textarea id="frm-message" rows="6" name="message"></textarea>
                </div>
                <div className="button block">
                  <button type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact