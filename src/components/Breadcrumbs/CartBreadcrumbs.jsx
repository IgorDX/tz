import React from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { AiOutlineHome } from "react-icons/ai";
export const CartBreadcrumbs = () => {
  return (
    <Breadcrumbs  separator="›">
  <Link className='home-icon' underline="hover" color="inherit" href="/">
  <AiOutlineHome />
  </Link>
  <Link className='whishlist-holder'
    underline="hover"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    Wishlist
  </Link> 
</Breadcrumbs>
  )
}
