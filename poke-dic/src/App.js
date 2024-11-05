import React, { useState, useRef, useCallback } from 'react'
import PokeTemplate from './pokemon/PokeTemplate'
import PokeList from './pokemon/PokeList'
import PokeInsert from './pokemon/PokeInsert'

function App() {
   const [pokes, setPokes] = useState([
      {
         id: 1,
         text: '이상해씨',
         img: './images/이상해씨.png',
         evl: ['이상해씨', '이상해풀', '이상해꽃'],
         evlIndex: 0,
      },
      {
         id: 2,
         text: '파이리',
         img: './images/파이리.png',
         evl: ['파이리', '리자드', '리자몽'],
         evlIndex: 0,
      },
      {
         id: 3,
         text: '꼬부기',
         img: './images/꼬부기.png',
         evl: ['꼬부기', '어니부기', '거북왕'],
         evlIndex: 0,
      },
      {
         id: 4,
         text: '캐터피',
         img: './images/캐터피.png',
         evl: ['캐터피', '단데기', '버터플'],
         evlIndex: 0,
      },
      {
         id: 5,
         text: '뿔충이',
         img: './images/뿔충이.png',
         evl: ['뿔충이', '딱충이', '독침붕'],
         evlIndex: 0,
      },
      {
         id: 6,
         text: '구구',
         img: './images/구구.png',
         evl: ['구구', '피죤', '피죤투'],
         evlIndex: 0,
      },
      {
         id: 7,
         text: '식스테일',
         img: './images/식스테일.png',
         evl: ['식스테일', '나인테일'],
         evlIndex: 0,
      },
   ])

   const [graydb, setGrayDb] = useState({})

   const nextId = useRef(8)

   const onDoubleClick = (id) => {
      setGrayDb((prevStatus) => ({
         ...prevStatus,
         [id]: !prevStatus[id],
      }))
      console.log(graydb)

      console.log([id])
   }

   const onClick = (id) => {
      setPokes((prevPokes) =>
         prevPokes.map((poke) => {
            if (poke.id === id) {
               const nextIndex = (poke.evlIndex + 1) % poke.evl.length
               const nextevlName = poke.evl[nextIndex]
               return {
                  ...poke,
                  text: nextevlName,
                  img: `./images/${nextevlName}.png`,
                  evlIndex: nextIndex,
               }
            }
            return poke
         })
      )
   }

   const onInsert = useCallback(
      (text) => {
         const poke = {
            id: nextId.current, // ref의 값을 가져온다
            text, //text: text,
            img: '/images/' + text + '.png',
            evl: [],
            evlIndex: 0,
         }

         setPokes(pokes.concat(poke))
         nextId.current += 1 // nextId를 1씩 더하기
      },
      [pokes]
   )
   const onRemove = useCallback(
      (id) => {
         const removedPokes = pokes.filter((poke) => poke.id !== id)
         setPokes(removedPokes)
      },
      [pokes]
   )

   return (
      <PokeTemplate>
         <PokeInsert onInsert={onInsert} />
         <PokeList pokes={pokes} graydb={graydb} onRemove={onRemove} onDoubleClick={onDoubleClick} onClick={onClick} />
      </PokeTemplate>
   )
}

export default App
