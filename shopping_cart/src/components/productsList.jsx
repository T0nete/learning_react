export function ProductList ({ productList }) {
  return (
    <ul className='productList'>
      {
           productList.map(product => (
             <li key={product.id} className='productCard'>
               <h3>{product.title}</h3>
               <p>{product.category}</p>
               <p>{product.price}</p>
               <p>{product.description}</p>
               <img src={product.image} alt={product.title} />
             </li>
           ))
        }
    </ul>
  )
}
