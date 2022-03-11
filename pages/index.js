import Head from 'next/head'
import AxiosCustom from '../components/apiConfig'
import styles from '../styles/Home.module.css'
import CardCustom from "./../components/card-custom"

export default function Home({ products }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>products</title>
        <meta name="description" content="products..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className='box-container'>
        <div className='row row-cols-1 row-cols-lg-2 row-cols-xxl-3'>
          {
            products.map((item, index) => (
              <CardCustom key={index} data={item} />
            ))
          }
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  let config = {
    url: "/products",
    method: "get"
  }

  let data = []
  await AxiosCustom(config)
    .then((res) => {
      data = res.data
    })
    .catch(err => {
      console.log("err", err)
    })

  return {
    props: { products: data }
  }
}
