import React from 'react'

 const ErrorMessage = ({ error })  => {
  return (
    <div className="flex items-center justify-flex-start p-[8px] -mt-[6px] mb-[3px]">
      <span className="font-medium text-[#e04848] text-sm -mt-[1px]">
        {error}
      </span>
    </div>
  );
}
export default ErrorMessage