
import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const List = (props: any) => {

    const [update, setUpdate] = useState<boolean>()
    const [datas, setData] = useState<any>()
    const [total,setTotal]= useState<number>()
    useEffect(() => {
        const fetchData = async () => {
            await getProds();
            setTotal( datas.reduce((total:number, item:any) => {
                
                return total + item.Product.price * item.qty;
              }, 0))
        };

        fetchData();
    }, [update]);
    const getProds = async () => {

        const res = await axios.get(`http://localhost:4000/api/get/basket/${props.current.id}`)
        setData(res.data)
        return res.data

    };


  

      
    // Using the hook
    const { data, isError, isLoading } = useQuery('Products', getProds)

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }
    const Up = async (id: string) => {

        try {

            var result = await axios.put('http://localhost:4000/api/up/basket/', { id: id })
            setUpdate(!update)

        } catch (err) {
        

        }
    }
    const dec = async (id: string) => {

        try {

            var result = await axios.put('http://localhost:4000/api/dec/basket/', { id: id })
            setUpdate(!update)

        } catch (err) {

        }
    }

    
    return (
        <div className="flex flex-col gap-10">


            {datas && data.length > 0 ? datas.map((e: any, index: any) => {
                return (
                    <div key={index} className="flex-wrap flex gap-10 font-sans text-[20px]">

                        <img src="https://images.squarespace-cdn.com/content/v1/5cedc00da64f4a000176dfe6/1559593047658-T5CWFEDS1H3PS0BPSFNN/IMG_1892.JPG?format=1000w"
                            className="w-[150px] h-[150px] rounded" />
                        <div className="flex flex-col gap-6 items-center">
                            <h1>{e.Product.productName}</h1>
                            <h4 className="text-gray-700 text-sm">{e.Product.price}</h4>
                            <div className="flex flex-wrap gap-20">
                                <div className="flex flex-wrap gap-3">
                                    <button className="inline-flex items-center justify-center w-6 h-6  mr-2 text-indigo-100 transition-colors duration-150 bg-gray-400 rounded-lg focus:shadow-outline hover:bg-black">
                                        <h1 onClick={() => dec(e.id)
                                            
                                        } className='relative bottom-[3.5px]'>-</h1>
                                    </button>
                                    <h1 className="relative bottom-[4px] right-[2px]">{e.qty}</h1>
                                    <button className="inline-flex items-center justify-center w-6 h-6 mr-2 text-indigo-100 transition-colors duration-150 bg-gray-400 rounded-lg focus:shadow-outline hover:bg-black">
                                        <h1 className='relative bottom-[3.5px]'
                                            onClick={() => Up(e.id)}
                                        >+</h1>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }) : <div> No Products in Cart</div>}
            <div className="flex flex-col">
                <h1 className="text-xl ">Order Info</h1>
                <div className="flex flex-wrap gap-52">

                    <div className="flex items-start flex-col gap-3 text-sm text-gray-600">

                        <h1>Total</h1>
                    </div>
                    <div className="flex items-end flex-col gap-3 ">
                        
                        <h1>{total}$</h1>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default List