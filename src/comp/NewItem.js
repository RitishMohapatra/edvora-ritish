import React from "react";

const NewItem = (props) => {

    let { title, description,imageUrl,brandname,price,location,date } = props;

    let date01 = date.slice(0,10);

    return (
        <div className='flex items-center m-2 mt-5 space-x-4  border-gray-500 bg-custom-gray rounded-xl 
         w-64 border-2'>
        <div className=" relative h-60 w-80 ">
          <div className=" flex img01 ">
            <img
                className=' rounded-md h-36 w-1/2  m-2'
              src={!imageUrl?"https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80":imageUrl}
              alt=""
            />
            <div className=" text-lg font-semibold text-center"> 
            <div>{title}</div>
            <div className=" text-sm text-gray-400 p-2">{brandname}</div>
            <div className=" text-sm p-2">₹{price}</div>
            </div>

          </div>
          <div className='px-2'>
            <div className="flex space-x-16">
            <h3 className="text-sm text-gray-400 mt-3">{location}</h3>
            <p className="text-sm text-gray-400 mt-3">{date01}</p>
            </div>

            
            <p className="text-gray-400">{description}</p>
            
            
          </div>
        </div>
      </div>
    );

}

export default NewItem;