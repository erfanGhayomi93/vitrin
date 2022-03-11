import axios from "axios";


const AxiosCustom = (_config = {}, _data = {}) => {
    let config = {
        baseURL: "https://fakestoreapi.com",
        headers: { "content-type": "application/json", "Access-Control-Allow-Origin": "*" },
        ..._config,
        data: {
            ..._data
        }
    }

    return (
        axios(config)
    )
}


export default AxiosCustom;