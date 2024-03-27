import { Switch } from '@mui/material'
import './table.scss'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RxCross1 } from "react-icons/rx";
import React from 'react'
import Button from '@mui/material/Button';
import { MdFavorite } from "react-icons/md";
import { ImCross } from "react-icons/im";
const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(64,94,255)', // желтый цвет
      },
    },
    typography:{
      button: {
        textTransform: 'none',
        fontWeight: 700
      }
    }
  });
  const data=[
    {
      photo: "http://istore.ltd/media/2017/04/iStore-Q3Gunmetal.png",
      productCode : 5589464520,
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, earum facilis, explicabo quae voluptates quibusdam reiciendis ut dolorum aut rem illo ab, iusto similique eaque architecto. Praesentium quisquam ex incidunt?",
      stock: "NY",
      QTY: "56 qty",
      price: ["48 €", "15.45 $"]
  
    },
    {
      photo: "http://istore.ltd/media/2017/04/iStore-Q3Gunmetal.png",
      productCode : 5589464520,
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, earum facilis, explicabo quae voluptates quibusdam reiciendis ut dolorum aut rem illo ab, iusto similique eaque architecto. Praesentium quisquam ex incidunt?",
      stock: "NY",
      QTY: "56 qty",
      price: ["48 €", "15.45 $"]
  
    },
    {
      photo: "http://istore.ltd/media/2017/04/iStore-Q3Gunmetal.png",
      productCode : 5589464520,
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, earum facilis, explicabo quae voluptates quibusdam reiciendis ut dolorum aut rem illo ab, iusto similique eaque architecto. Praesentium quisquam ex incidunt?",
      stock: "NY",
      QTY: "56 qty",
      price: ["48 €", "15.45 $"]
  
    },
    {
      photo: "http://istore.ltd/media/2017/04/iStore-Q3Gunmetal.png",
      productCode : 5589464520,
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, earum facilis, explicabo quae voluptates quibusdam reiciendis ut dolorum aut rem illo ab, iusto similique eaque architecto. Praesentium quisquam ex incidunt?",
      stock: "NY",
      QTY: "56 qty",
      price: ["48 €", "15.45 $"]
  
    },{
      photo: "http://istore.ltd/media/2017/04/iStore-Q3Gunmetal.png",
      productCode : 5589464520,
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, earum facilis, explicabo quae voluptates quibusdam reiciendis ut dolorum aut rem illo ab, iusto similique eaque architecto. Praesentium quisquam ex incidunt?",
      stock: "NY",
      QTY: "56 qty",
      price: ["48 €", "15.45 $"]
  
    },{
      photo: "http://istore.ltd/media/2017/04/iStore-Q3Gunmetal.png",
      productCode : 5589464520,
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, earum facilis, explicabo quae voluptates quibusdam reiciendis ut dolorum aut rem illo ab, iusto similique eaque architecto. Praesentium quisquam ex incidunt?",
      stock: "NY",
      QTY: "56 qty",
      price: ["48 €", "15.45 $"]
  
    }
  ]
export const Table = () => {
  return (
    <table>
        <thead>
            <tr>
                <th className='photo-cel'>Photo</th>
                <th className='product-code'>Product code</th>
                <th className='name'>Name</th>
                <th className='stock'>Stock</th>
                <th className='qty'>QTY</th>
                <th className='price'>Price</th>
                <th className='add-to-cart'></th>
                <th>
                <ThemeProvider theme={theme}>
                    <Switch color="primary" />
                </ThemeProvider>
                    </th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
          {data.map((item)=>(
    <tr className='table-row'>
      <div>
        <td className='body-photo-cel'>
          <div className='table-flex'>
        <img className='product-photo' src={item.photo} alt="Photo" />
        </div>
        </td>
        </div>
        <td>
          <div className='table-flex'>
          {item.productCode}
          </div>
        </td>
        <td>
          <div className='table-flex large-name'>{item.name}</div>
        </td>
        <td>
          <div className='table-flex'>{item.stock}</div>
        </td>
        <td >
          <div className='table-flex item-qty'>{item.QTY}</div>
        </td>
        <td>
          <div className='table-flex-row'>
              <div className='first-price'>{item.price[0]}</div>
                <tr>
                {item.price[1]}
              </tr>
              </div>
        </td>
      <td>
        <div className='table-flex'>
        <ThemeProvider theme={theme}>
        <Button className='add-to-cart-btn' variant="outlined">
        Add to card
        </Button>
      </ThemeProvider>
</div>
</td>
<td>
<div className='favorite'>
<MdFavorite className='favorite-btn' size={36}  fill='rgb(64,94,255)'/>
</div>
</td>
<td>
  <div className='cross'>
  <ImCross />
  </div>
</td>
    </tr>
          ))}
        </tbody>
    </table>
  )
}
