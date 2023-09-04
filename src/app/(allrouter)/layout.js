import Link from 'next/link';
import React from 'react';

const layout = ({children}) => {

    return (
        <div>
    
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Blog">Blog</Link></li>
          <li><Link href="/Login">Login</Link></li>
          <li><Link href="/Resister">Resister</Link></li>
          <li><Link href="/Product">Products</Link></li>
          <li><Link href="/Product_Server">Product Server</Link></li>
          {/* <li><Link href={`/Lectures/Lecture1`}>Lectures</Link></li> */}
        </ul>
     
      {children}
      </div>
    );
};

export default layout;