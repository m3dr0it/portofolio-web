// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {applyApiCookie} from 'next-universal-cookie';

type BaseResponse = {
  message : string,
  data : object
}


export async function getStaticProps(jwt:string) {
  try{
    const postLogin = await fetch('http://localhost:8000/api/v1/whoami',{
      method : 'GET',
      body : JSON.stringify(jwt)
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
    case 'GET':
      let response:BaseResponse = {
        message : 'failed',
        data : {}
      }

      console.log(req.cookies);

      let isLogin = (await getStaticProps("test")).props

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