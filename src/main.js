import './index.css'
import html from'./markdown.md'
import im from './back-image.jpg'

const img = new Image()
img.src = im
document.body.append(img)