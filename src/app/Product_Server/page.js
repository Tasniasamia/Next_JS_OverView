async function serverhook(){
    let data=await fetch("https://dummyjson.com/products");
    let converjson=await data.json();
    
    return converjson.products
}

 async function page()  {
    let data=await serverhook();
    return (
        <div>
        {
            data.map(index=><div key={index.id}>
{index.title}
<div>{index.description}</div>
<image src={index.images[0]}  alt="my_image"/>
            </div>)
        }
    </div>
    );
};

export default page;