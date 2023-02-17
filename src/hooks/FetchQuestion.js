




import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import data from "../database/data"

/** redux actions */
import * as Action from '../redux/question-reducer'

// fetch question hook to fetch api data and sent value to store 
export const useFetchquestion = () =>{
    const dispatch = useDispatch()
    const [getData, setGetData] = useState({
        isLoading: false,
        apiData : [],
        serverError: null
    })

    useEffect(()=> {
        setGetData(prev => (
            { ...prev,
                isLoading:true
            }))
            // async function to fetch backend data 
            (async ()=>{
                try {
                    let question = await data;
                    if(question.length > 0){
                        setGetData(prev => ({ ...prev,isLoading:false
                        }))
                        setGetData(prev => ({ ...prev,apiData : question,
                        }))

                        /** dispatch an action */
                        dispatch()
                    }
                } catch (error) {
                    setGetData(prev => ({ ...prev,isLoading:false
                        }))
                        setGetData(prev => ({ ...prev,serverError: error
                        }))
                }
            })()
    })
}