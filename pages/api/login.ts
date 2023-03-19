// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {applyApiCookie} from 'next-universal-cookie';

type Data = {
  name: string,
  password: string
}

type BaseResponse = {
  message : string,
  data : object
}

type LoginData = {
  username : string,
  password : string
}

export async function getStaticProps(test:LoginData) {
  try{
    const postLogin = await fetch('http://localhost:8000/api/v1/login',{
      method : 'POST',
      body : JSON.stringify(test)
    }) 

    let res = await postLogin.json()
  
    return {
      props: {
        res,
      },
    }
  }catch{
    let res = {
      error : true,
      message : "unreacable"
    }
    return {
      props: {
        res
      },
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  

  applyApiCookie(req,res)
  switch (req.method) {
    case 'POST':
      console.log("api login hitted");
      

      let data:LoginData = req.body

      let response:BaseResponse = {
        message : 'failed',
        data : {}
      }

      let isLogin = (await getStaticProps(data)).props

      if(isLogin.res.error){
        response.message = isLogin.res.message
        res.send({
          signedIn : false
        })
      }else{
        res.send({
          signedIn : true,
          data : {
            accessToken : isLogin.res.data.accessToken
          }
        })
      }
      break;

    case 'OPTIONS':
      res.setHeader("Allowed-Method","POST")
      res.status(200).end()
      break;

    default:
      res.status(405).end()
      break;
  }
}