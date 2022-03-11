import React from 'react'
import classes from "./../index.module.scss"


export default function DetailProduct({ data }) {
    return (
        <article className={classes.rootDetailProduct}>
            <div>
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <h4 className="m-0">{data.title}</h4>
                    <div className={`${classes.rate}`}>
                        <div className={classes.rating}>
                            <input type="radio" name="rating" value="5" id="5" />
                            <label htmlFor="5">☆</label>
                            <input type="radio" name="rating" value="4" id="4" />
                            <label htmlFor="4">☆</label>
                            <input type="radio" name="rating" value="3" id="3" />
                            <label htmlFor="3">☆</label>
                            <input type="radio" name="rating" value="2" id="2" />
                            <label htmlFor="2">☆</label>
                            <input type="radio" name="rating" value="1" id="1" />
                            <label htmlFor="1">☆</label>
                        </div>
                    </div>
                </div>

                <p className='text-muted'>{data.category}</p>
                <p className='text-danger h4'>${data.price}</p>
            </div>

            <div className={classes.description}>
                <h5>description:</h5>
                <p className='text-muted'>
                    {data.description}
                </p>
            </div>

            <div className={classes.button}>
                <button type="button" className="btn btn-labeled btn-danger">
                    <span className="btn-label m-2">
                        <img src='/assets/images/addtocard.png' width="25px" height="22px" />
                    </span>
                    <span className="m-2 d-inline-block h5">
                        add to card
                    </span>
                </button>
            </div>
        </article>
    )
}
