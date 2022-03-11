import Head from 'next/head'
import React from 'react'
import AxiosCustom from '../../components/apiConfig'
import DetailProduct from './components/detailProduct'
import ImgProduct from './components/imgProduct'
import classes from "./index.module.scss"


export default function DetailsProduct({ product }) {


    return (
        <section className={classes.root}>
            <Head>
                <title>{product.title}</title>
                <meta name="description" content={product.description} />
                <link rel="icon" href={product.image} />
            </Head>

            <div className={`box-container ${classes.box}`}>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <ImgProduct data={product} />
                    </div>
                    <div className='col-12 col-md-8'>
                        <DetailProduct data={product} />
                    </div>
                </div>
            </div>
        </section>
    )
}


export async function getServerSideProps(context) {
    let config = {
        url: `/products/${context.params.id}`,
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
        props: { product: data }
    }
}