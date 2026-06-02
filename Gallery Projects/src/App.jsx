import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([])
  const [page, setPage] = useState(4)

  const btnHandler = async () => {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=10`
    );

    setList(data);
  };

  
  const prevHandler = () =>{
    setPage(page + 1)
    console.log('prev....');
    
  }
  
  const nextHandler = () =>{
    setPage(page - 1)
    console.log('next....');
    
  }
  
    useEffect(()=>{
      btnHandler()
    },[page])


  return (
    <div className="bg-black  min-h-screen text-white p-10">
      
      <button
        
        className="px-6 py-3 m-5 bg-green-500 rounded-lg text-lg active:scale-95"
        onClick={prevHandler}
      >
        Previous Data
      </button>
      <button
        
        className="px-6 py-3 m-5 bg-green-500 rounded-lg text-lg active:scale-95"
        onClick={nextHandler}

      >
         Next Data
      </button>
      <button
        
        className="px-6 py-3 m-5 bg-green-500 rounded-lg text-lg active:scale-95"
      >
        Get Data
      </button>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
  {list.map((item) => (
    <a href={item.url}>
      <div
      key={item.id}
      className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
    >
      <img
        src={item.download_url}
        alt={item.author}
        className="w-full h-52 object-cover"
      />

      <div className="p-3">
        <h2 className="text-white text-sm font-medium">
          {item.author}
        </h2>
      </div>
    </div>
    </a>
  ))}
</div>

     
  

    </div>
  );
};

export default App;