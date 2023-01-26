/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import{CgWebsite} from 'react-icons/cg'
import{AiFillGithub} from 'react-icons/ai'
import{FaFacebookF} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__Social'>
        <a href="" ><CgWebsite/></a>
        <a href="" target="_blank"><AiFillGithub/></a>
        <a href="https://www.facebook.com/nattpong.puarisri" target="_blank"><FaFacebookF/></a>
    </div>  
  )
}

export default HeaderSocial