import React, { useCallback, useState } from 'react'

const Performance = () => {

    const[debounceInput,setDebounceInput] = useState('')
    const[throttleInput,setThrottleInput] = useState('');

    const ourDebounce = (fn,delay)=>{
        let timer;
        return(...args)=>{
            clearTimeout(timer);
            timer = setTimeout(()=>{
                fn(...args)
            },delay)
        }
    }

    const ourThrottle = (fn,delay)=>{
        let timer;
        return(...args)=>{
            if(!timer){
                fn(...args)
                timer = setTimeout(()=>{
                    timer = null
                },delay)
            }
        }
    }
    
    const debounceHandler = (e)=>{
        console.log(e.target.value)
        setDebounceInput(e.target.value)
    }
    
    const throttleHandler = (e)=>{
        console.log(e.target.value)
        setThrottleInput(e.target.value)
    }

    const handleDebounce = useCallback(ourDebounce(debounceHandler,500),[])
    const handleThrottle = useCallback(ourThrottle(throttleHandler,1000),[])

  return (
    <div>
        <input type="text" onChange={handleDebounce} />
        <input type="text" onChange={handleThrottle} />
        <div>
            <span>Debounce:{debounceInput}</span>
        </div>
        <div>
            <span>Throttle:{throttleInput}</span>
        </div>
    </div>
  )
}

export default Performance