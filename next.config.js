/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["img.freepik.com"]
    },
    redirects:async()=>{
        return [
            {
                source:"/Resister",
                destination:"/",
                permanent:false
            }
        ]
    }

    
}

module.exports = nextConfig
