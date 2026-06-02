import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetail = () => {

    const params = useParams()
  console.log(params,'==>> params');
  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-[40px] text-center">
         {params.id} Course Detail 
      </h1>
    </div>
  )
}

export default CourseDetail
