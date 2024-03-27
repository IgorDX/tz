import React from 'react'
import { BiTrashAlt } from "react-icons/bi";
import "./cart.scss"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BiSolidTrashAlt } from "react-icons/bi";
import { CartBreadcrumbs } from '../../components/Breadcrumbs/CartBreadcrumbs';
import { Table } from '../../components/Table/Table';
import { FaArrowLeft } from "react-icons/fa";
import { Button } from '@mui/material';
export const Cart = () => {
    const theme = createTheme({
        palette: {
          primary: {
            main: 'rgb(64,94,255)', // желтый цвет
          },
        },
        typography:{
          button: {
            textTransform: 'none',
            fontWeight: 'bold',
            width: 400,
            marginRight: 10
          }
        }
      });
  return (
    <div className='cart'>
<CartBreadcrumbs></CartBreadcrumbs>
<h1 className='heading-title'>Wishlist</h1>
<span className='number-of-products'>158 products</span>
    <div className="buttons">
<div className='custom-buttons'>
<button className='trash-button button-gray'>
    <div className='all-products'>All products</div>
    <BiSolidTrashAlt  fill='#ffff' size={18}/>
</button>
<button className='trash-button'>
    <div>Phones </div>
    <BiSolidTrashAlt fill='rgb(178,186,199)'  size={18}/></button>
<button className='trash-button'>
    <div>Accessories</div>
    <BiSolidTrashAlt fill='rgb(178,186,199)' size={18}/>
</button>
</div>
<button className='new-category-btn'>
New category
</button>
    </div>
    <Table></Table>
    <div className='cart-bottom'>
    <div className='bottom-flex'>
        <a href='#' className='back'>
            <FaArrowLeft size={24} fill='rgb(64,94,255)'/>
            <div>Back</div>
        </a>
        <div>
        <ThemeProvider theme={theme}>
        <Button className='left-button' variant="outlined">Add product</Button>
       </ThemeProvider>
      
       <ThemeProvider theme={theme}>
       <Button variant="contained">
          Add to cart
        </Button>
       </ThemeProvider>  
        </div>
    </div>
    </div>
</div>
  )
}
