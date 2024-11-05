import './css/PokeList.css'
import PokeListItem from './PokeListItem'

function PokeList({ pokes, onRemove, onDoubleClick, graydb, onClick }) {
   return (
      <div className="TodoList">
         {pokes.map((poke) => (
            <PokeListItem poke={poke} key={poke.id} onRemove={onRemove} onDoubleClick={onDoubleClick} graydb={graydb} onClick={onClick} />
         ))}
      </div>
   )
}

export default PokeList
