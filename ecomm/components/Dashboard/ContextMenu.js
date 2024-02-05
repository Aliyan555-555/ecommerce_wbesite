import React from 'react'

const ContextMenu = ({RightClickitem,positionX,positionY,isShow,buttons,ContextMenuRef}) => {
  return (
    <menu
    className='context-menu absolute w-[150px] bg-Dashboard text-body rounded-lg'
    style={{
        top:positionY + 1 +'px',
        left:positionX + 1 +'px',
        display:isShow ? 'block' : 'none'
    }}
    ref={ContextMenuRef}
    >
    {buttons.map((item,index)=>{
        const hendleClick =(e)=>{
            e.stopPropagation();
            item.onClick(e,RightClickitem)
        }
        return(
            <button 
            className='py-4 px-2 text-2xl w-full border-b border-Dashboard-border hover:bg-[#ffffff46]'
            key={index} 
            onClick={hendleClick}>
               {item.text}
            </button>
        )})}
    </menu>
  )
}

export default ContextMenu