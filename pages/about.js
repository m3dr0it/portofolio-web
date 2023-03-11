import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Image from 'next/image'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>  
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className=" font-extralight text-2xl">Experiences</h1>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-4 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2022 - now</time>
                <h3 className="text-lg font-light ">Java Developer At PT. IFG Life </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Develop Payment Module for Insurance Company, Payment Module Integrated to many Payment Gateway, 
                and each payment routes/directed to which payment gateway that has cheapest fee and best availability </p>
                <p  className="text-base font-light">Tech Stack : Java ( Quarkus ), PostgreSQL, Kafka, Kong API Gateway</p>
            </li> 
            <li className="mb-4 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2022 - Desember 2022</time>
                <h3 className="text-lg font-light ">Freelance Node Js Developer At PT. Lestari Elektronik Otomasi </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Application act as middleware for Machines in Production Factory, application provides monitor machine performance and maintenance management</p>
                <p  className="text-base font-light">Tech Stack : Node JS (Express), MySQL, Socket.io</p>
            </li> 
            <li className="mb-4 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Januari 2022 - September 2022</time>
                <h3 className="text-lg font-light ">Java Developer At PT. Fastana Logistik Indonesia</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Logistic ECommerce Application, Help  Logistic Company find suitable partner and improve their bussiness. 
                Application provides variety feature, such as Company Contract, Multipick Shipment, Multidrop Shipment </p>
                <p  className="text-base font-light">Tech Stack : Java (Springboot), PostgreSQL, Redis, Kafka</p>
            </li> 
            <li className="mb-4 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2021 - Desember 2021</time>
                <h3 className="text-lg font-light ">Java Developer At PT. Mcash Integrasi</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">White Label Logistic ECommerce Application, Help  Logistic Company find suitable partner and improve their bussiness</p>
                <p  className="text-base font-light">Tech Stack : Java (Springboot), PostgreSQL, Redis, Kafka</p>
            </li>                
            <li className="mb-4 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Februari 2020 - May 2020</time>
                <h3 className="text-lg font-light ">Fullstack Developer at PT. Code Development Indonesia</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">3 Month Bootcamp Intens learning of Node Js and React Js and on the last month we created an E-Commerce Application as the last project</p>
                <p  className="text-base font-light">Tech Stack : Node Js, React Js, PostgreSQL</p>
            </li>
            <li className="mb-4 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2019 - Januari 2021</time>
                <h3 className="text-lg font-light ">Network Operation Center Engineer at PT. Lima Menara Bintang</h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">Monitor and control large computer networks from a central location. I responsible for alarm response, ticketing and network troubleshooting</p>
            </li>
            <li className="mb-4 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-500">September 2019</time>
                <h3 className="text-lg font-light">Graduated From Politechnic State Of Bandung</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Finished Telecommunication Diploma Degree with IOT Project titled 
                "Realization of integration of monitoring system and online gas sales using web application and android internet of things based"
                 </p>
            </li>
        </ol>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
