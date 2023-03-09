import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>  
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <ol class="relative border-l border-gray-200 dark:border-gray-700">                  
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-500">September 2019</time>
                <h3 class="text-lg font-semibold">Graduated From Politechnic State Of Bandung</h3>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Finished Telecommunication Diploma Degree with IOT Project titled 
                "Realization of integration of monitoring system and online gas sales using web application and android internet of things based"
                 </p>
            </li>
            <li class="mb-10 ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 2019 - Januari 2021</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Network Operation Center Engineer at PT. Lima Menara Bintang</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
            </li>
            <li class="ml-4">
                <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Februari 2021 - May 2022</time>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Node Js Fullstack Developer Bootcamp</h3>
                <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
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
