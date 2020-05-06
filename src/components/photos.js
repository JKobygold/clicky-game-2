import React from "react";
import css from "../app.css";
import hover from"hover.css";
import {useState} from 'react'


  // function below is from: https://stackoverflow.com/a/6274381
function shuffle(a) {
  a = [...a]
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Photos() {
   
    const initialImages = [
      "https://www.allaboutbirds.org/guide/assets/photo/67385731-720px.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg",
      "https://www.allaboutbirds.org/guide/assets/photo/67385101-1280px.jpg", 
      "https://www.nationalgeographic.com/content/dam/animals/rights-exempt/best-of-animals-2018/photo-ark-parrots-endangered-bird-world-intelligence-3.adapt.1900.1.jpg" ,
      "https://www.allaboutbirds.org/news/wp-content/uploads/2020/03/tricolored-heron-dorian-anderson-texas-124505431-1800-1280x853.jpg" ,
      "https://www.nationalgeographic.com/content/dam/photography/PROOF/2017/june/bird-gallery/7481546_uploadsmember586882yourshot-586882-7481546jpg_olm2z27kl7lbrtlb3pimwfia33p3eflutfvvbpyjwjhzlmh4iziq_2000x1333.jpg" ,
      "https://static01.nyt.com/images/2020/04/03/science/03TB-KINGFISHER1/03TB-KINGFISHER1-mediumSquareAt3X.jpg" ,
      "https://www.birds.cornell.edu/home/wp-content/uploads/2019/05/IBunting-Kinderman-58737651-FI.gif" ,
      "https://test.cdn.download.ams.birds.cornell.edu/api/v1/asset/171633971" ,
      "https://i.ytimg.com/vi/YTR21os8gTA/maxresdefault.jpg",
      "https://media.univcomm.cornell.edu/photos/1280x720/B5160AB6-DBBB-DF97-8192C4C0B7C10F55.jpg",
      "https://assets.website-files.com/589215a57e34325c3af796b3/5ab96e94cd72e62700584a06_rmr-blog-bird-oasis.jpg",]

      const [images, setImages] = useState(initialImages)
      const [clickedImages, setClickedImages] = useState({})
      const [score, setScore] = useState(0)
      const [highScore, setHighScore] = useState(0)


      const gameOver = won => {
        if (won) {
            alert('You won!')
        } else {
            alert('You lost!')
        }
        setImages([...initialImages])
        setClickedImages({})
        setScore(0)
    }

    return (
        <div className="App">  
        
       <h1 > Current score: {score}</h1>
        <br />
        <h1> High score: {highScore}</h1> 
       <br />

            {images.map(PhotoNew =>
                <img
                    src={PhotoNew}
                    class={"hvr-pulse-grow"}
                    style={{width: 200, height: 200}}
                    key={PhotoNew}
                    alt={PhotoNew}
                    onClick={() => {
                        if (clickedImages[PhotoNew]) {
                            return gameOver(false)
                        }
                        setClickedImages({
                            ...clickedImages,
                            [PhotoNew]: true
                        })
                        const newScore = score + 1
                        setScore(newScore)
                        if (newScore > highScore) {
                            setHighScore(newScore)
                        }
                        setImages(shuffle(images))
                        if (newScore >= 12) {
                            return gameOver(true)
                        }
                    }}
                />
            )}
        </div>
    );
}