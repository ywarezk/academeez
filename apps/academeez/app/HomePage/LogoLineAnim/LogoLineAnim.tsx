/**
 * This component will be displayed behind the typewriter
 * it displays the logo mark and the color should change once in a while
 *
 * now let's plan how the animation will work
 * I have 3 changing colors
 * I want the change to be generally slow
 *
 *
 * Created June 19th, 2020
 * @author: ywarezk
 * @version: 1.3.2
 * @copyright: Nerdeez Ltd
 */

import { useRef, useEffect, FC } from 'react';
import { AnimWrapper } from './LogoLineAnim.markup';

export const LogoLineAnim: FC = () => {
  const canvas = useRef(null);
  const parent = useRef(null);
  let logoWidth = 0;
  const green = 'rgba(1,214,98)';
  const red = 'rgb(251,95,95)';
  const blue = 'rgba(92,149,255)';
  let opacity = 0;

  const canvasFillParent = () => {
    canvas.current.height = parent.current.offsetHeight;
    canvas.current.width = parent.current.offsetWidth * 0.55;
    if (canvas.current.width > 600) {
      canvas.current.width = 600;
    }
    logoWidth = canvas.current.width * 0.4;
    if (logoWidth > 200) logoWidth = 200;
    draw();
  }

  const draw = () => {
    if (!canvas.current?.getContext) return;
    const height = canvas.current.height;
    const width = canvas.current.width;
    const ctx = canvas.current.getContext('2d');
    opacity = opacity + 0.01;
    if (opacity >= 45) {
      opacity = 0;
    }
    let opacityRed, opacityGreen, opacityBlue;
    if (opacity > 0 && opacity <= 15) {
      opacityRed = opacity / 100;
      opacityBlue = 0.15 - (opacity / 100);
      opacityGreen = 0;
    }
    else if (opacity > 15 && opacity <= 30) {
      opacityBlue = 0;
      opacityRed = 0.15 - ((opacity - 15) / 100);
      opacityGreen = (opacity - 15) / 100;
    }
    else if (opacity > 30 || opacity === 0) {
      opacityBlue = opacity === 0 ? 0 : (opacity - 30) / 100;
      opacityRed = 0
      opacityGreen = opacity === 0 ? 0.15 : 0.15 - ((opacity - 30) / 100);
    }

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(logoWidth, height);
    ctx.lineTo(width, 0);
    ctx.lineTo(width - logoWidth, 0);
    ctx.lineTo(0, height);
    ctx.fillStyle = red;
    ctx.globalAlpha = opacityRed;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(logoWidth, height);
    ctx.lineTo(width, 0);
    ctx.lineTo(width - logoWidth, 0);
    ctx.lineTo(0, height);
    ctx.fillStyle = green;
    ctx.globalAlpha = opacityGreen;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(0, height);
    ctx.lineTo(logoWidth, height);
    ctx.lineTo(width, 0);
    ctx.lineTo(width - logoWidth, 0);
    ctx.lineTo(0, height);
    ctx.fillStyle = blue;
    ctx.globalAlpha = opacityBlue;
    ctx.fill();

    requestAnimationFrame(draw);
  }

  useEffect(() => {
    canvasFillParent();
    canvas.current.addEventListener('resize', canvasFillParent);

    return () => canvas?.current.removeEventListener('resize', canvasFillParent)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimWrapper ref={parent}>
      <canvas ref={canvas} width={600} />
    </AnimWrapper>

  )
}
