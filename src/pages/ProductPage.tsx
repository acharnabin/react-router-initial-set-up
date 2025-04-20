import React from 'react'
import { useParams } from 'react-router'

const ProductPage = () => {
  const params = useParams()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Product Details
        </h1>
        <div className="border-t pt-4 text-center">
          <p className="text-lg text-gray-600">
            Showing details for product ID:
          </p>
          <p className="text-xl font-semibold text-indigo-600 mt-2">
            {params?.id}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
