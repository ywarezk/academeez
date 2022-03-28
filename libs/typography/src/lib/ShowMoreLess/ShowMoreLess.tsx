/**
 * Used to limit the text size
 *
 * Created March 26th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { FC, useEffect, useRef, useState } from "react"
import { TypographyProps } from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ExpandMore from '@mui/icons-material/ExpandMore'
import ExpandLess from '@mui/icons-material/ExpandLess'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'

export interface ShowMoreLessProps {
  height: number;
  children: React.ReactElement<TypographyProps>
}

export const ShowMoreLess: FC<ShowMoreLessProps> = ({
  height,
  children
}) => {

  // do we even need the see more box
  const [isShowing, setIsShowing] = useState(false)

  // What should be displayed show more or show less
  const [ isMore, setIsMore ] = useState(true)

  const textRef = useRef<HTMLDivElement>()

  useEffect(() => {
    const { clientHeight = 0 } = textRef.current as HTMLDivElement
    if ( clientHeight > height) {
      setIsShowing(true)
    }
  }, [])

  return (
    <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <Collapse in={ !isMore } collapsedSize={ height }>
        <Box ref={ textRef }>
          {children}
        </Box>
      </Collapse>

      <Fade in={isShowing}>
        <Box sx={{
          position: isMore ? 'absolute' : 'static',
          bottom: 0,
          width: '100%',
          background: 'rgba(255,255,255,0.8)',
          mt: 1
        }}>
          <Button
            variant="text"
            color="secondary"
            sx={{
              width: '100%',
              height: '30px',
              borderRadius: 0
            }}
            startIcon={
              isMore ? <ExpandMore /> : <ExpandLess />
            }
            onClick={() => setIsMore(!isMore)}
          >
            Read { isMore ? 'More' : 'Less' }
          </Button>
        </Box>
      </Fade>
    </Box>
  )
}
