import Link from 'next/link'
import React from 'react'

export default function CardBootstrap({ data }) {
    return (
        <article className="card col">
            <img src={data.image} className="mx-auto" width="150px" height="150px" alt={data.title} />
            <div className="card-body">
                <h5 className="card-title text-ellipsis">{data.title}</h5>
                <p className="card-text text-ellipsis">{data.description}</p>
                <Link href="products/[id]" as={`products/${data.id}`}>
                    <a className="btn btn-primary">details</a>
                </Link>
            </div>
        </article>
    )
}
