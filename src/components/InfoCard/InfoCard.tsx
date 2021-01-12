import { TElement, TReactChildren } from '../../types'
import { useEffect, useRef, useState } from 'react'

import styles from './InfoCard.module.css'

const contentRef = useRef<HTMLDivElement>(null)
const [spans, setSpans] = useState(0)
const [contentHeight, setContentHeight] = useState(0)

const cardStyle = {
   height: contentHeight,
   marginBottom: 10,
   gridAutoRows: 100,
}
const cardSpan = {
   gridRowEnd: `span ${spans}`,
}

const InfoCard = ({ children }: TReactChildren): TElement => {
   useEffect(() => {
      setContentHeight(contentRef.current.clientHeight)
      const newSpansVal = Math.ceil(
         (contentHeight + cardStyle.height + cardStyle.marginBottom) /
            cardStyle.gridAutoRows,
      )
      setSpans(newSpansVal)
   }, [spans])

   return (
      <div className={styles.info} style={cardSpan}>
         <div ref={contentRef}>{children}</div>
      </div>
   )
}

export default InfoCard
