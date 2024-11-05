import './css/PokeListItem.css'
import { MdRemoveCircleOutline, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import { IoIosArrowDroprightCircle } from 'react-icons/io'

function PokeListItem({ poke, onRemove, onDoubleClick, graydb, onClick }) {
   const { id, text, img, evl } = poke

   return (
      <div className="TodoListItem">
         <div>
            <img src={poke.img} alt={poke.name} width="130" onDoubleClick={() => onDoubleClick(id)} style={{ filter: graydb[id] ? 'grayscale(100%)' : 'none' }} />
            <div className="text">{text}</div>
         </div>
         <div className="buttons">
            <div>
               <button onClick={() => onClick(poke.id)} disabled={poke.evl.length === 0}>
                  진화 <IoIosArrowDroprightCircle />
               </button>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>
               <MdRemoveCircleOutline />
            </div>
         </div>
      </div>
   )
}

export default PokeListItem
