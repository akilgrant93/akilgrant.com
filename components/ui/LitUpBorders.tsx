"use client"
import React, {useState} from 'react'
import { useClipboard } from 'use-clipboard-copy';

const LitUpBorders = ({title, icon, position, handleClick, otherClasses
}: {
    title: string,
    icon: React.ReactNode,
    position: string,
    handleClick?: () => void,
    otherClasses?: string
}) => {
  const [copied, setCopied] = useState(false);

  const clipboard = useClipboard({
    onSuccess() {
        setCopied(true);
        console.log('Text was copied successfully!')
        setTimeout(() => setCopied(false), 2000);
      },
      onError() {
        console.log('Failed to copy text!')
        setCopied(false);
      }
    });
  return (
    <button onClick={() => clipboard.copy('akil.grant.93@gmail.com')} className={`${copied === true ? '' : 'cursor-pointer'} p-[3px] relative w-full rounded-lg md:w-60 md:mt-10`}>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className={`px-9 py-2 flex items-center justify-center  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent gap-2 ${otherClasses}`}>
            {position === 'left' && icon}
            {title}
            {position === 'right' && icon}
        </div>
    </button>
  )
}

export default LitUpBorders