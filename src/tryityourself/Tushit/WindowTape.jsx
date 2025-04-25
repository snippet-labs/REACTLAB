import React,{useState,useEffect} from 'react'


const WindowTape = () => {

        const [width, setWidth] = useState(window.innerWidth);
        const [height, setHeight] = useState(window.innerHeight);
        useEffect(() => {
            const handleWidth = () => setWidth(window.innerWidth);
            window.addEventListener('resize', handleWidth);
            const handleHeight = () => setHeight(window.innerHeight);
            window.addEventListener('resize', handleHeight);
          }, []);       
          return (
            <div className='bg'>
    <div className='text'>
      <p>{width} X {height}</p>
    </div>
    </div>
  )
}

export default WindowTape;
